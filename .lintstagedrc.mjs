import path from 'path';

const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

export default {
  '**/*.{ts,tsx}': [buildEslintCommand],
  '**/*.{ts,tsx,js,jsx,json,css,md}': ['prettier --write'],
};
