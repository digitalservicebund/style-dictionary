const tokens = require("../dist/tokens.json");

test("tokens.json", () => {
  expect(JSON.stringify(tokens, null, 2)).toMatchInlineSnapshot(`
    "{
      "color": {
        "background": {
          "button": {
            "primary": {
              "default": "#004b76",
              "hover": "#336f91",
              "focus": "#004b76",
              "active": "#b3c9d6",
              "disabled": "#dcdee1"
            },
            "secondary": {
              "default": "#f5e05d",
              "hover": "#e5ce5c",
              "focus": "#f5e05d",
              "active": "#f7e67d",
              "disabled": "#dcdee1"
            },
            "tertiary": {
              "default": "transparent",
              "hover": "#ecf1f4",
              "focus": "#ecf1f4",
              "active": "#ecf1f4",
              "disabled": "transparent"
            }
          }
        },
        "border": {
          "button": {
            "tertiary": {
              "default": "#004b76",
              "hover": "#004b76",
              "focus": "#004b76",
              "active": "transparent",
              "disabled": "#b8bdc3"
            },
            "ghost": {
              "default": "transparent",
              "hover": "#b8bdc3",
              "focus": "#b8bdc3",
              "active": "#b8bdc3",
              "disabled": "transparent"
            }
          }
        },
        "text": {
          "button": {
            "primary": {
              "default": "#fff",
              "active": "#004b76",
              "disabled": "#b8bdc3"
            },
            "secondary": {
              "default": "#004b76",
              "disabled": "#b8bdc3"
            },
            "tertiary": {
              "default": "#004b76",
              "disabled": "#b8bdc3"
            },
            "ghost": {
              "default": "#004b76",
              "disabled": "#b8bdc3"
            }
          }
        },
        "base": {
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
        }
      },
      "size": {
        "spacing": {
          "0": 0,
          "1": 0.0625,
          "2": 0.125,
          "4": 0.25,
          "6": 0.375,
          "8": 0.5,
          "10": 0.625,
          "12": 0.75,
          "14": 0.875,
          "16": 1,
          "20": 1.25,
          "24": 1.5,
          "28": 1.75,
          "32": 2,
          "36": 2.25,
          "40": 2.5,
          "44": 2.75,
          "48": 3,
          "56": 3.5,
          "64": 4,
          "80": 5,
          "96": 6,
          "112": 7,
          "128": 8,
          "144": 9,
          "160": 10,
          "176": 11,
          "192": 12,
          "208": 13,
          "224": 14,
          "240": 15,
          "288": 18,
          "320": 20,
          "384": 24
        }
      },
      "font": {
        "family": {
          "sans": "BundesSansWeb, Calibri, Verdana, Arial, Helvetica, sans-serif",
          "serif": "BundesSerifWeb, Cambria, Georgia, \\"Times New Roman\\", serif",
          "condensed": "BundesSansCondWeb, Calibri, Verdana, Arial, Helvetica, sans-serif"
        },
        "weight": {
          "regular": 400,
          "bold": 700
        }
      }
    }"
  `);
});
