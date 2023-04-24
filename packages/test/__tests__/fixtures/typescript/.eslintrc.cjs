module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],

  rules: {
    // NOTE: we can't turn this on because of anti-TS / ESM maintainers
    // https://github.com/import-js/eslint-plugin-import/issues/2111
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-multiple-empty-lines': 1,
  },

  // settings: {
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  //   },
  //   'import/resolver': {
  //     typescript: {
  //       alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
  //       project: ['./tsconfig.json'],
  //     },
  //   },
  // },

  overrides: [
    {
      files: ['*.ts', '*.cjs', '*.js', '*.tsx', '*.jsx'],
      rules: {
        'import/prefer-default-export': ['off'],
        'import/extensions': [2, 'ignorePackages'],
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            'newlines-between': 'never',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
  ],
};
