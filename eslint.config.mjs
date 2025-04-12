import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import dangolEsLintConfig from '@dangol-dev/front-eslint-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {
    rules: {},
  },
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', ...dangolEsLintConfig.extends),
  {
    rules: {
      ...dangolEsLintConfig.rules,
    },
  },
];

export default eslintConfig;
