---
sidebar_position: 1
---

# Spacing

White (empty) space plays an important role in UI design. The amount of space decides about relationship and hierarchy.

## Spacing scale

Deliberately limiting possible spacing values to increase consistency. Based on 8px. **Naming is based on the pixel value**, even if the actual value is defined in rem.

Example: `8 = 0.5rem` (the value `0.5rem` is `8px`, hence the name: `8`)

With this naming no translation is necessary between a Figma design and code. 8px in the design equals "spacing 8".

**There are gaps in the scale**, e.g. there is no "spacing 21", which can be confusing. On the other hand this allows us to later add such a spacing if needed. In a gap-less scale (like s, m, l, xl, 2xl) it's not possible to add a step in-between.

We were looking for a pragmatic solution fitting our situation: Figma designs in pixels, no commitment to a rigidly limited scale. Our scale is inspired by the Tailwind spacing scale (numeric naming, with gaps, relation between name and value) taking a comment from their author into account:

> Sort of wishing Tailwind's spacing scale numbers just matched the pixel value (even though it'd still be rems under the hood.)

– [source: tweet from Adam Wathan, author of Tailwind](https://twitter.com/adamwathan/status/1216721837356462087?lang=en)

Obviously choosing this scale has also downsides. In particular it is in practice not possible to *later* globally change "spacing 8" to 10px.

