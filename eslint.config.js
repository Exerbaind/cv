import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist/**', 'node_modules/**', 'tmp/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-empty': ['error', { allowEmptyCatch: true }],
    },
  },
  { files: ['*.js'], languageOptions: { globals: globals.node } },
  {
    files: ['public/sw.js'],
    languageOptions: { globals: globals.serviceworker },
  },
  prettier,
  {
    files: ['**/*.{js,ts,tsx}'],
    rules: {
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
        { blankLine: 'always', prev: '*', next: ['function', 'export'] },
        { blankLine: 'any', prev: 'export', next: 'export' },
      ],
    },
  }
)
