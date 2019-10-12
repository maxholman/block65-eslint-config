const extendsBase = ['airbnb-base', 'eslint:recommended', 'prettier'];

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        ...extendsBase,
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        // allow triple slash for typescript references
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            overrides: {
              constructors: 'off',
            },
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx'],
      extends: extendsBase,
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: [
        '*.config.js',
        '*-config.js',
        '__tests__/**/*.test.ts',
        'stories/**/*.ts',
        'jest-environment/*.js',
        '__mocks__/**/*.ts',
      ],
      extends: extendsBase,
      globals: {
        page: false,
        browser: false,
        context: true,
        jestPuppeteer: true,
      },
      env: {
        node: true,
        jest: true,
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
      },
    },
  ],
};
