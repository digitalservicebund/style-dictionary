---
sidebar_position: 2
---

# Use with Tailwind

Tailwind is configured in the `tailwind.config.js` file. Your own configuration there is merged with the default configuration from Tailwind itself.

## Presets

Presets are just regular Tailwind configuration objects, taking the exact same shape as the configuration you would add in your `tailwind.config.js` file.

The style dictionary provides you such a preset. The preset is merged with Tailwind's default configuration and your own configuration.

## Subset

Only a sensible subset of the tokens is available in Tailwind CSS.

## Add preset to your `tailwind.config.js`

Add a `presets` entry to your config file. Or in case you already use (an)other preset, add it to the list.

```js
module.exports = {
  presets: [
    require("@digitalservice4germany/style-dictionary/tailwind")
  ],
  …
}
```

## Add colors

Configure additional colors in `theme.extend.colors` in your `tailwind.config.js`.

```js
module.exports = {
  …
  theme: {
    extend: {
      colors: {
        purple: "#800080", // very new color
        blue: {
          500: "#00f" // change hex value of preset's blue-500 color
        }
      }
      …
    }
  }
  …
}
```

Note: Using `theme.colors` without `extend` would overwrite all colors from the preset.

## Debugging

### View resolved (full) config

It is often helpful to view the entire (resolved) Tailwind config, after your own config, Tailwind defaults and presets are merged. One way is to run the following snippet in the CLI:

```sh
node -e 'console.log(JSON.stringify(require("tailwindcss/resolveConfig")(require("./tailwind.config.js")), null, 2));'
```

## More

- [Tailwind docs: Presets](https://tailwindcss.com/docs/presets)
