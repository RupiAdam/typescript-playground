module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/lines-between-class-members': 'off'
  },
};
