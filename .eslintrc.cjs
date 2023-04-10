/**
 * @type {import('eslint').BaseConfig}
 */
module.exports = {
  root: true,
  extends: './packages/eslint-config/javascript.js',

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
