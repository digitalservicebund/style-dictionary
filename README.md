# DigitalService Style Dictionary

[![version](https://img.shields.io/npm/v/@digitalservice4germany/style-dictionary)](https://www.npmjs.com/package/@digitalservice4germany/style-dictionary)
[![npm downloads](https://img.shields.io/npm/dw/@digitalservice4germany/style-dictionary)](https://www.npmjs.com/package/@digitalservice4germany/style-dictionary)

> A Style Dictionary is a system that allows you to define styles once, in a way for any platform or language to consume. A single place to create and edit your styles, and a single command exports these rules to all the places you need them […]

– [Style Dictionary](https://amzn.github.io/style-dictionary/)

## Documentation

For documentation about the DigitalService Style Dictionary, please visit the [documentation website](https://digitalservicebund.github.io/style-dictionary/).

Also, please join the [discussions](https://github.com/digitalservicebund/style-dictionary/discussions).

DigitalService internal only: you may also join the `#1_ds_engineering_frontend` Slack channel.

## Development

```
npm install
npm run build
npm run test
```

### Documentation website

```
cd website
npm install
npm start
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
