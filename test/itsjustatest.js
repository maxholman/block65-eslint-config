const { ESLint } = require('eslint');
const path = require('path');
const util = require('util');

const eslint = new ESLint({
  useEslintrc: true,
  cwd: path.resolve(__dirname, '.'),
  cache: false,
});

eslint
  .calculateConfigForFile('./fixtures/react/component.stories.tsx')
  .then((xxx) => console.log(util.inspect(xxx, { depth: Infinity })))
  .catch(console.error);
