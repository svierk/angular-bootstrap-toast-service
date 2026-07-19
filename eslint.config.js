// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const rxjs = require('eslint-plugin-rxjs-x').default;
const jasmine = require('eslint-plugin-jasmine');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config(
  {
    ignores: ['.angular/', 'coverage/', 'dist/', 'src/polyfills.ts'],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...angular.configs.tsRecommended,
      rxjs.configs.recommended,
      prettier,
    ],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    processor: angular.processInlineTemplates,
    rules: {
      'prettier/prettier': ['off', { parser: 'angular' }],
      'spaced-comment': ['warn', 'always'],
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/prefer-standalone': 'off',
      // Angular 22 defaults components to OnPush; the core migration added
      // ChangeDetectionStrategy.Eager to preserve pre-v22 behavior. Keep that
      // behavior-neutral and opt out of the new stylistic OnPush rule for now.
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      'no-unused-vars': 'off',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/array-type': ['warn', { default: 'array' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],
      'rxjs-x/no-implicit-any-catch': 'off',
    },
  },
  {
    files: ['**/*.spec.ts'],
    plugins: { jasmine },
    rules: {
      ...jasmine.configs.recommended.rules,
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
  {
    files: ['**/*.html'],
    ignores: ['**/*inline-template-*.component.html'],
    extends: [prettier],
    rules: {
      'prettier/prettier': ['off', { parser: 'angular' }],
    },
  }
);
