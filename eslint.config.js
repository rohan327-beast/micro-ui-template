import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tanstackQuery from '@tanstack/eslint-plugin-query';

export default [
  // 1. Ignore build artifacts
  {
    ignores: ['dist/**'],
  },

  // 2. Base ESLint and TypeScript recommended rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. Configuration for CommonJS files (like jest.config.cjs)
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs', // <-- This is the key change
      globals: {
        ...globals.node, // Provides Node.js globals like 'module' and 'require'
      },
    },
  },

  // 4. Configuration for your TypeScript source files
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser, // Provides browser globals
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@tanstack/query': tanstackQuery,
    },
    rules: {
      // Rules from plugins
      ...reactHooks.configs.recommended.rules,
      ...tanstackQuery.configs.recommended.rules,

      // Your custom rules
      'react-refresh/only-export-components': 'warn',

      // The other errors from your log that you may want to fix or disable
      'no-useless-catch': 'warn', // Consider changing to 'warn' or fixing the code
      '@typescript-eslint/no-empty-object-type': 'warn', // Consider changing to 'warn'
    },
  },
];
