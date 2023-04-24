/** @type {import('eslint').BaseConfig} */
module.exports = {
  extends: [
    require.resolve('./typescript.cjs'),
    require.resolve('./javascript.cjs'),
  ],
};
