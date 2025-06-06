import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import dangolPlugin from '@dangol-dev/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {},
  },
  plugins: {
    '@dangol-dev': dangolPlugin,
  },
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:@dangol-dev/recommended'),
  {
    files: ['**/*.ts', '**/*.tsx'],
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      'no-unused-vars': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/display-name': 'off',
      '@next/next/no-img-element': 'warn',
    },
  },
  {
    ignores: ['*.config.js'],
  },
];

export default eslintConfig;
