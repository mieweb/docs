import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      "node_modules/**",
      "public/**",
      "themes/wc-eh-docs/**",
      "themes/_wc-eh-docs-backup/**",
      "themes/**/assets/js/vendor/**",
      "*.config.js",
      "*.config.mjs",
      "config/**",
      "navigation2menu.js",
    ],
  },

  // Base JS config
  js.configs.recommended,

  // TypeScript config
  ...tseslint.configs.recommended,

  // Browser JS config (for theme assets)
  {
    files: ["themes/**/assets/js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        lunr: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-expressions": "off",
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },

  // React config
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "19.1",
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off", // Not needed in React 19
      "react/prop-types": "off", // Using TypeScript
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // General rules
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
    },
  },

  // Prettier config (must be last to override other configs)
  eslintConfigPrettier
);
