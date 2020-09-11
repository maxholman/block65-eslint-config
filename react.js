module.exports = {
  extends: [
    './index.js',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['formatjs'],
  rules: {
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'never' },
    ],

    // Recommended defaults - see https://formatjs.io/docs/tooling/linter/
    'formatjs/enforce-description': ['error', 'literal'],
    'formatjs/enforce-default-message': ['error', 'literal'],
    'formatjs/enforce-placeholders': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'formatjs/no-multiple-plurals': 'error',
    'formatjs/enforce-plural-rules': [
      2,
      {
        one: true,
        other: true,
        zero: false,
      },
    ],
  },
};
