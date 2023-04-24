/**
 * @type {import('eslint').BaseConfig}
 */
module.exports = {
  root: true,
  extends: [require.resolve('./javascript.cjs')],

  // overrides: [
  //   {
  //     files: ['*.js'],
  //     rules: {
  //       'import/no-commonjs': 'off',
  //     },
  //   },
  // ],
};
