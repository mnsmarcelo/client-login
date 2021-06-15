module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'import/export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', 120, { ignoreTemplateLiterals: true }],
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
