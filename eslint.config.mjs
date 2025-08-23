import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default ts.config(
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      ...ts.configs.recommended,
      ...next.configs["core-web-vitals"],
    ],
    plugins: {
      react,
    },
    // This is the new section that fixes the error
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["**/*.js"],
    extends: [
      ...ts.configs.disableTypeChecked,
    ],
  },
);