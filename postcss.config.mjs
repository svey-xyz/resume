/** @type {import('postcss-load-config').Config} */
import { join, dirname } from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {
  plugins: {
		'postcss-import': {},
		'tailwindcss/nesting': {},
		tailwindcss: {
			config: join(__dirname, 'tailwind.config.ts'),
		},
		autoprefixer: {},
  },
};

export default config;
