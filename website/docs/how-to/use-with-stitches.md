---
sidebar_position: 4
---

# Use with Stitches

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
