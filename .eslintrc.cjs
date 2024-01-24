module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/function-component-definition": [2, { "namedComponents": "arrow-function", "unnamedComponents": "arrow-function" }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/require-default-props": "off",
    "no-nested-ternary": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/no-array-index-key": "off",
    "react-refresh/only-export-components": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "": "never",
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
    "prettier/prettier": [
      "error",
      {},
      {
        "usePrettierrc": true
      }
    ]
  },
}
