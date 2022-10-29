/**
 * @type {import('eslint').BaseConfig}
 */
module.exports = {
  root: true,
  extends: './packages/eslint-config',

  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ['./tsconfig-eslint.json'],
  // },

  overrides: [
    {
      files: ['*.js'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
};
