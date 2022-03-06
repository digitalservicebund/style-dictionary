# DigitalService4Germany Style Dictionary

> A Style Dictionary is a system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them […]

-- [Style Dictionary](https://amzn.github.io/style-dictionary/)

## Supported platforms

Currently the following platforms are supported. Please get in touch if you need support for another platform.

- JavaScript/TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Stitches](https://stitches.dev/) (CSS-in-JS)

### Installation

```sh
npm install @digitalService4Germany/style-dictionary
```

### Usage examples

#### JavaScript/TypeScript

```js
import { colorBackgroundButtonPrimaryFocus } from "@digitalService4Germany/style-dictionary";

console.log(colorBackgroundButtonPrimaryFocus); // #003350
```

#### Tailwind CSS

Style Dictionary provides a configuration preset which you can use as a base configuration. See [Tailwind CSS docs](https://tailwindcss.com/docs/presets) for more information.

```js
  // tailwind.config.js
  […]
  presets: [
    require("@digitalservice4germany/style-dictionary/tailwind")
  ],
  […]

  // use in html
  <div class="text-blue-900"></div> // #003350
```

Only a sensible subset of the tokens is available in Tailwind CSS.

#### Stitches

See [Stitches docs](https://stitches.dev/docs/tokens) for more information.

```js
  // stitches.config.js|ts
  import stitchesConfig from "@digitalservice4germany/style-dictionary/stitches";
  export const { css, … } = createStitches(stitchesConfig);

  // use in code
  const button = css({
    backgroundColor: "$blue900"
  });
```

Only a sensible subset of the tokens is available in the Stitches configuration.
