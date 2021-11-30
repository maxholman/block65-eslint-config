export default {
  preset: 'ts-jest/presets/default-esm',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    // I believe this is because jest-resolve doesn't support exports?
    // https://github.com/facebook/jest/issues/9771
    'eslint/use-at-your-own-risk': 'eslint/lib/unsupported-api.js',
  },
};
