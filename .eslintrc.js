module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'no-useless-return': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/no-array-index-key': 'off',
    'no-unused-expressions': 'off',
    'no-array-constructor': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'radix': 'off',
    'no-empty-pattern': 'off',
    'no-useless-escape': 'off',
    'no-alert': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src',
      },
    },
  },
};
