
[![npm](https://img.shields.io/npm/v/@block65/eslint-config.svg)](https://www.npmjs.com/package/@block65/eslint-config)
[![npm](https://img.shields.io/npm/l/@block65/eslint-config.svg)](https://github.com/block65/eslint-config/blob/master/LICENSE)


## Block65 ESLint config with Prettier

An ESLint [shareable config][shareable] for Block65 projects.

## Installation

Install with peer dependencies:

```bash
$ npx install-peerdeps --dev @block65/eslint-config
```

### Usage

Add the following to `module.exports` in `.eslintrc.cjs` or `eslintConfig` in `package.json`

```json
"extends": [
  "@block65"
]
```
Add the following to your `module.exports` in `prettier.config.mjs` or `prettier` in `package.json`

```json
"@block65/eslint-config/prettier"
```

For more details on ESLint shareable configs, read the [shareable configs docs][shareable].

[shareable]: https://eslint.org/docs/developer-guide/shareable-configs

### License

MIT


