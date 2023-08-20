// Разрешенные импорты (для сортировки)

const ALLOWED_PATH_GROUPS = ['pages/**', 'features/**', 'entities/**', 'shared/**'].map((pattern) => ({
  pattern,
  group: 'internal',
  position: 'after',
}));

// Для запрета приватных путей
const DENIED_PATH_GROUPS = [
  // Private imports are prohibited, use public imports instead
  'app/**',
  'pages/*/**',
  'features/*/**',
  'entities/*/**',
  'shared/*/*/**', // Для shared +1 уровень, т.к. там чаще мы обращаемся к конкретной библиотеке/компоненты
  // Prefer absolute imports instead of relatives (for root modules)
  '../**/app',
  '../**/pages',
  '../**/features',
  '../**/entities',
  '../**/shared',
];

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',

  plugins: ['react-refresh', '@emotion', 'unused-imports', 'import', 'prettier'],

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'alloy',
    'alloy/react',
    'alloy/typescript',
    '@feature-sliced',
    'prettier',
  ],

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': 'error',

    // FSD
    'import/order': [
      2,
      {
        pathGroups: ALLOWED_PATH_GROUPS,
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      },
    ],
    'no-restricted-imports': [
      2,
      {
        patterns: DENIED_PATH_GROUPS,
      },
    ],

    // Unused-imports
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    // Emotion
    '@emotion/jsx-import': 'error',
  },
};
