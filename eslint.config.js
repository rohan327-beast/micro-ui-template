import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tanstackQuery from '@tanstack/eslint-plugin-query'; // <-- 1. Import the plugin

export default [
  // Ignore the production build directory
  {
    ignores: ['dist/**'],
  },

  // Core configuration for TypeScript, React, and TanStack Query
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    // Extend all recommended rule sets
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      tanstackQuery.configs['recommended'], // <-- 2. Add the recommended rules
    ],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@tanstack/query': tanstackQuery, // <-- 3. Register the plugin
    },
    rules: {
      // Enforce Rules of Hooks
      ...reactHooks.configs.recommended.rules,
      // Ensure components are valid for Fast Refresh
      'react-refresh/only-export-components': 'warn',
    },
  },
];
