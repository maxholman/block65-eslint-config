module.exports = {
  extends: require.resolve('./index.js'),
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'import/no-commonjs': 'off',
      },
    },
  ],
};
