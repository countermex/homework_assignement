module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  ignorePatterns: ['.eslintrc.*', 'cypress/**/*', 'cypress.config.ts'],
  rules: {
    'no-param-reassign': 0,
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 0,
    'max-len': [2, 180, 2, {'ignoreUrls': true}],
    'comma-dangle': ["error", "never"],
    "@typescript-eslint/comma-dangle": "off",
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': ['error', 'never'],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    'no-alert': 0,
    'react/require-default-props': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'no-plusplus': 0,
    'no-console': 0,
    "import/no-extraneous-dependencies" : ["error", {"devDependencies": true}]
  }
};