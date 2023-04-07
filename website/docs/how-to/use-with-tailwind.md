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

```sh
module.exports = {
    presets: [
      require("@digitalservice4germany/style-dictionary/tailwind")
    ],
    … your other configuration
}
```

## More

- [Tailwind docs: Presets](https://tailwindcss.com/docs/presets)
