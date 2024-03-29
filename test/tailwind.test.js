const tailwindConfig = require("../dist/tailwind");

test("default tailwind config", () => {
  expect(JSON.stringify(tailwindConfig, null, 2)).toMatchInlineSnapshot(`
    "{
      "theme": {
        "colors": {
          "inherit": "inherit",
          "current": "currentColor",
          "transparent": "transparent",
          "black": "#0b0c0c",
          "blue": {
            "100": "#f2f6f8",
            "200": "#ecf1f4",
            "300": "#dce8ef",
            "400": "#ccdbe4",
            "500": "#b3c9d6",
            "600": "#6693ad",
            "700": "#336f91",
            "800": "#004b76",
            "900": "#003350"
          },
          "gray": {
            "100": "#f6f7f8",
            "200": "#eff2f4",
            "300": "#edeef0",
            "400": "#dcdee1",
            "500": "#cacdd2",
            "600": "#b8bdc3",
            "700": "#a6acb5",
            "800": "#6f7785",
            "900": "#4e596a"
          },
          "green": {
            "100": "#e8f7f0",
            "200": "#ccebdd",
            "300": "#b0d8c6",
            "400": "#97ccb4",
            "500": "#65b491",
            "600": "#349d6e",
            "700": "#01854a",
            "800": "#006538",
            "900": "#003e22"
          },
          "orange": {
            "100": "#fef7e8",
            "200": "#fae5bb",
            "300": "#f9d791",
            "400": "#f8c967",
            "500": "#f7bb3d",
            "600": "#e9aa26",
            "700": "#d79815",
            "800": "#c18509",
            "900": "#ad7500"
          },
          "red": {
            "100": "#fcf2f5",
            "200": "#f9e5ec",
            "300": "#f2ccd8",
            "400": "#ecb3c5",
            "500": "#e699b1",
            "600": "#d9668b",
            "700": "#c61a50",
            "800": "#b0243f",
            "900": "#8e001b"
          },
          "white": "#fff",
          "yellow": {
            "100": "#fefcef",
            "200": "#fff9d2",
            "300": "#f9ec9e",
            "400": "#f7e67d",
            "500": "#f5e05d",
            "600": "#f2dc5d",
            "700": "#e5ce5c",
            "800": "#dac23c",
            "900": "#c3a91e"
          }
        },
        "fontFamily": {
          "font-family-sans": [
            "BundesSansWeb",
            "Calibri",
            "Verdana",
            "Arial",
            "Helvetica",
            "sans-serif"
          ],
          "font-family-serif": [
            "BundesSerifWeb",
            "Cambria",
            "Georgia",
            "\\"Times New Roman\\"",
            "serif"
          ],
          "font-family-condensed": [
            "BundesSansCondWeb",
            "Calibri",
            "Verdana",
            "Arial",
            "Helvetica",
            "sans-serif"
          ]
        },
        "spacing": {
          "0": "0rem",
          "1": "0.0625rem",
          "2": "0.125rem",
          "4": "0.25rem",
          "6": "0.375rem",
          "8": "0.5rem",
          "10": "0.625rem",
          "12": "0.75rem",
          "14": "0.875rem",
          "16": "1rem",
          "20": "1.25rem",
          "24": "1.5rem",
          "28": "1.75rem",
          "32": "2rem",
          "36": "2.25rem",
          "40": "2.5rem",
          "44": "2.75rem",
          "48": "3rem",
          "56": "3.5rem",
          "64": "4rem",
          "80": "5rem",
          "96": "6rem",
          "112": "7rem",
          "128": "8rem",
          "144": "9rem",
          "160": "10rem",
          "176": "11rem",
          "192": "12rem",
          "208": "13rem",
          "224": "14rem",
          "240": "15rem",
          "288": "18rem",
          "320": "20rem",
          "384": "24rem"
        }
      }
    }"
  `);
});
