const { overrides, ...rest } = require('./base.js');

module.exports = {
  ...rest,
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: ['airbnb/base'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['airbnb-typescript/base'],
    },
    ...overrides,
  ],
};
