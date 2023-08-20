export default {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '*.{js,jsx,ts,tsx}': 'eslint',
  '*.{js,jsx,ts,tsx,md,html}': 'prettier --write',
};
