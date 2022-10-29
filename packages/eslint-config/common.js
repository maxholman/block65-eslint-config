module.exports = {
  allJsWildcards: ['*.js', '*.jsx', '*.cjs', '*.cjsx', '*.mjs', '*.mjsx'],
  allTsWildcards: ['*.ts', '*.tsx', '*.cts', '*.ctsx', '*.mts', '*.mtsx'],

  allJsRules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
        pathGroups: [
          {
            pattern: './*.scss',
            group: 'parent',
            patternOptions: { matchBase: true },
            position: 'before',
          },
        ],
      },
    ],

    // typical during DOM manipulation
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['el'] }],

    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
  },

  esmRules: {
    // always need an extension
    'import/extensions': ['error', 'ignorePackages'],

    // we certainly do not prefer default exports
    'import/prefer-default-export': 'off',
  },
};
