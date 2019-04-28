module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': 'airbnb',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    'babel',
    'react',
    'import',
    'jsx-a11y',
  ],
  'rules': {
    'jsx-quotes': [2, 'prefer-single'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-unescaped-entities': [0],
    'no-underscore-dangle': ['error', { 'allow': ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }],
  },
};