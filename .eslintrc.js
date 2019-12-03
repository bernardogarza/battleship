module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'radix': 0,
    'no-shadow': 0,
    'no-param-reassign': 0,
    'eol-last': 0,
    'import/no-mutable-exports': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
    'no-restricted-globals': 0,
    'no-loop-func': 0
  },
};
