# DigitalService Style Dictionary (deprecated)

**Angie Design System's design tokens**

:warning: DEPRECATED! This package is only for products which already use the "Angie" design system. New products please use the [KERN UX design system](https://www.kern-ux.de) instead.

[![version](https://img.shields.io/npm/v/@digitalservice4germany/style-dictionary)](https://www.npmjs.com/package/@digitalservice4germany/style-dictionary)
[![npm downloads](https://img.shields.io/npm/dw/@digitalservice4germany/style-dictionary)](https://www.npmjs.com/package/@digitalservice4germany/style-dictionary)

> A Style Dictionary is a system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them […]

– [Style Dictionary](https://amzn.github.io/style-dictionary/)

## Introduction

### Design Tokens

Design tokens are one part of a design system. Essentially they are variables that store small design decisions in a key-value format.

### Style Dictionary

A style dictionary is a collection of design tokens. Tokens are stored in a platform-agnostic way. In plain text files.

### Exports

Tokens are exported in various formats to be consumed by different platforms and languages. The exports can be installed via npm.

## Installation

The style dictionary is published as a npm package. You can install it by running:

```sh
npm install @digitalservice4germany/style-dictionary
```

## Use with Tailwind

Tailwind is configured in the `tailwind.config.js` file. Your own configuration there is merged with the default configuration from Tailwind itself.

### Presets

Presets are just regular Tailwind configuration objects, taking the exact same shape as the configuration you would add in your `tailwind.config.js` file.

The style dictionary provides you such a preset. The preset is merged with Tailwind's default configuration and your own configuration.

### Subset

Only a sensible subset of the tokens is available in Tailwind CSS.

### Add preset to your `tailwind.config.js`

Add a `presets` entry to your config file. Or in case you already use (an)other preset, add it to the list.

```js
module.exports = {
  presets: [
    require("@digitalservice4germany/style-dictionary/tailwind")
  ],
  …
}
```

### Add colors

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

### Debugging

#### View resolved (full) config

It is often helpful to view the entire (resolved) Tailwind config, after your own config, Tailwind defaults and presets are merged. One way is to run the following snippet in the CLI:

```sh
node -e 'console.log(JSON.stringify(require("tailwindcss/resolveConfig")(require("./tailwind.config.js")), null, 2));'
```

### More

- [Tailwind docs: Presets](https://tailwindcss.com/docs/presets)

## Use with JavaScript/TypeScript

```js
import { colorBackgroundButtonPrimaryFocus } from "@digitalService4Germany/style-dictionary";

console.log(colorBackgroundButtonPrimaryFocus); // #003350
```

## Further explanation

### Spacing

White (empty) space plays an important role in UI design. The amount of space decides about relationship and hierarchy.

#### Spacing scale

Deliberately limiting possible spacing values to increase consistency. Based on 8px. **Naming is based on the pixel value**, even if the actual value is defined in rem.

Example: `8 = 0.5rem` (the value `0.5rem` is `8px`, hence the name: `8`)

With this naming no translation is necessary between a Figma design and code. 8px in the design equals "spacing 8".

**There are gaps in the scale**, e.g. there is no "spacing 21", which can be confusing. On the other hand this allows us to later add such a spacing if needed. In a gap-less scale (like s, m, l, xl, 2xl) it's not possible to add a step in-between.

We were looking for a pragmatic solution fitting our situation: Figma designs in pixels, no commitment to a rigidly limited scale. Our scale is inspired by the Tailwind spacing scale (numeric naming, with gaps, relation between name and value) taking a comment from their author into account:

> Sort of wishing Tailwind's spacing scale numbers just matched the pixel value (even though it'd still be rems under the hood.)

– [source: tweet from Adam Wathan, author of Tailwind](https://twitter.com/adamwathan/status/1216721837356462087?lang=en)

Obviously choosing this scale has also downsides. In particular it is in practice not possible to _later_ globally change "spacing 8" to 10px.

### Colors

#### Base colors

Set of unsemantic color tokens, all other semantic color tokens derive from.

Naming is in the format `<literal color name>-<number>`. Example: `blue-500`.

## Development

```
npm install
npm run build
npm run test
```

### npm link

Link the `dist` directory, not the root directory.

1. `npm run build`
2. `cp package.json dist/`
3. `cd dist`
4. `npm link` (inside `dist`)

### Release

1. update changelog
2. use `publish` GitHub action workflow
