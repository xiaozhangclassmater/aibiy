module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars" : 'off',
    "@typescript-eslint/no-explicit-any" : 'off',
    "@typescript-eslint/no-empty-function" : 'off',
    "react-hooks/exhaustive-deps" : 'off',
    "no-empty" : 'off',
    "@typescript-eslint/no-non-null-assertion" : 'off'
  },
}
