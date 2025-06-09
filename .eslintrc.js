module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-native', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react-native/no-inline-styles': 'warn',
    'prettier/prettier': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',
    'react-native/no-raw-text': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'node_modules/',
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    '.eslintrc.js',
    '*.config.js',
    '*.config.ts'
  ],
}; 