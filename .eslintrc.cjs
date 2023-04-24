/**
 * @type {import('eslint').BaseConfig}
 */
module.exports = {
  root: true,
  extends: './packages/eslint-config/javascript.cjs',

  // right now, we have 2 packages and they both have their own eslint config
  ignorePatterns: ['packages/**/*'],
};
