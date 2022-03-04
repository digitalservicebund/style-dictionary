import StyleDictionary from "style-dictionary";
import type { Dictionary, File } from "style-dictionary";
import { readdirSync, writeFileSync, Dirent } from "fs";
import { merge } from "lodash";
import { format } from "prettier";
import invariant from "tiny-invariant";
import yaml from "yaml";
import rimraf from "rimraf";
import { exec } from "child_process";

const { fileHeader } = StyleDictionary.formatHelpers;

StyleDictionary.registerParser({
  pattern: /\.yaml$/,
  parse: ({ contents }) => yaml.parse(contents),
});

StyleDictionary.registerFormat({
  name: "tailwind",
  formatter: ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    return format(
      `${fileHeader({ file })}module.exports = ${JSON.stringify(
        dictionary.allTokens.reduce(
          (acc, token) => {
            invariant(token.attributes, "Token attributes are undefined.");
            const { category, type, item } = token.attributes;
            // console.log(category, type, item, token);

            if (token.path[0] === "color") {
              return merge(acc, {
                theme: {
                  colors: token.path
                    .slice(2)
                    .reduceRight((acc, k) => ({ [k]: acc }), token.value),
                },
              });
            }

            if (category === "size" && type === "spacing") {
              return merge(acc, {
                theme: {
                  spacing: {
                    [item as string]: token.value,
                  },
                },
              });
            }

            if (token.path[0] === "font" && token.path[1] === "family") {
              return merge(acc, {
                theme: {
                  fontFamily: {
                    [token.name]: token.value.split(/\s*,\s*/),
                  },
                },
              });
            }

            return acc;
          },
          {
            theme: {
              colors: {
                inherit: "inherit",
                current: "currentColor",
                transparent: "transparent",
              },
              fontFamily: {},
            },
          }
        ),
        null,
        2
      )};`,
      { parser: "babel" }
    );
  },
});

const getStyleDictionaryConfig = (brand: string, platform: string) => {
  return {
    source: [
      "tokens/globals/**/*.{json,js,yaml}",
      `tokens/brands/${brand}/**/*.{json,js,yaml}`,
      `tokens/platforms/${platform}/**/*.{json,js,yaml}`,
    ],
    platforms: {
      ...["css", "scss", "less", "stylus"].reduce((acc, t) => {
        return Object.assign({}, acc, {
          [t]: {
            transformGroup: t === "stylus" ? "css" : t,
            buildPath: `dist/${t}/${brand}/`,
            prefix: "ds4g",
            files: [
              {
                destination: `variables.${t}`,
                format: `${t}/variables`,
                options: {
                  outputReferences: true,
                },
              },
            ],
          },
        });
      }, {}),
      flutter: {
        buildPath: `dist/flutter/${brand}/`,
        transformGroup: "flutter",
        files: [
          {
            destination: "tokens.dart",
            format: "flutter/class.dart",
          },
        ],
      },
      json: {
        buildPath: `dist/json/${brand}/`,
        transforms: ["attribute/cti", "name/cti/camel", "size/rem"],
        files: [{ destination: "allTokens.json", format: "json/flat" }],
      },
      tailwind: {
        buildPath: `dist/tailwind/${brand}/`,
        transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
        files: [
          {
            destination: "tailwind.config.js",
            format: "tailwind",
          },
        ],
      },
    },
  };
};

rimraf("./dist", () => {
  const platforms = Object.keys(getStyleDictionaryConfig("_", "_").platforms);

  const brands = readdirSync("./tokens/brands", {
    withFileTypes: true,
  })
    .filter((c: Dirent) => c.isDirectory())
    .map((c) => c.name);

  brands.map((brand) => {
    platforms.map((platform) => {
      StyleDictionary.extend(
        getStyleDictionaryConfig(brand, platform)
      ).buildPlatform(platform);
    });
  });

  writeFileSync(
    "./dist/index.js",
    format(
      `
  module.exports = { tailwindPreset: {${brands
    .map(
      (brand) => `${brand}: require("./tailwind/${brand}/tailwind.config.js")`
    )
    .join(",")}
  }};`,
      { parser: "babel" }
    )
  );

  exec(
    "./node_modules/.bin/tsc dist/index.js --declaration --allowJs --emitDeclarationOnly --outDir dist",
    (error, _, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
    }
  );
});
