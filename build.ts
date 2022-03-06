import StyleDictionary from "style-dictionary";
import type { Dictionary, File } from "style-dictionary";
import { readdirSync, Dirent } from "fs";
import { merge } from "lodash";
import { format } from "prettier";
import invariant from "tiny-invariant";
import yaml from "yaml";
import rimraf from "rimraf";

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

            if (token.path[0] === "color" && token.path[1] === "base") {
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

StyleDictionary.registerFormat({
  name: "stitches",
  formatter: ({ dictionary, file }: { dictionary: Dictionary; file: File }) => {
    return format(
      `${fileHeader({ file })}module.exports = ${JSON.stringify(
        dictionary.allTokens.reduce(
          (acc, token) => {
            invariant(token.attributes, "Token attributes are undefined.");
            const { category, type, item } = token.attributes;
            // console.log(category, type, item, token);

            if (token.path[0] === "color" && token.path[1] === "base") {
              if (token.path.at(-1)?.match(/\d{2,3}/)) {
                return merge(acc, {
                  theme: {
                    colors: token.path.slice(2, -2).reduceRight(
                      (acc, k) => {
                        return { [k]: acc };
                      },
                      {
                        [`${token.path.at(-2)}${token.path.at(-1)}`]:
                          token.value,
                      }
                    ),
                  },
                });
              }
              return merge(acc, {
                theme: {
                  colors: token.path.slice(2).reduceRight((acc, k) => {
                    return { [k]: acc };
                  }, token.value),
                },
              });
            }

            if (category === "size" && type === "spacing") {
              return merge(acc, {
                theme: {
                  space: {
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
      js: {
        buildPath: brand === "default" ? "dist/" : `dist/${brand}/`,
        transforms: ["name/cti/camel", "size/rem"],
        files: [
          { destination: "index.js", format: "javascript/es6" },
          {
            format: "typescript/es6-declarations",
            destination: "index.d.ts",
          },
        ],
      },
      tailwind: {
        buildPath:
          brand === "default" ? "dist/tailwind/" : `dist/tailwind/${brand}/`,
        transforms: ["attribute/cti", "name/cti/kebab", "size/rem"],
        files: [
          {
            destination: "index.js",
            format: "tailwind",
          },
        ],
      },
      stitches: {
        buildPath:
          brand === "default" ? "dist/stitches/" : `dist/stitches/${brand}/`,
        transforms: ["attribute/cti", "name/cti/camel", "size/rem"],
        files: [
          {
            destination: "index.js",
            format: "stitches",
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
});
