import { defineConfig, globalIgnores } from 'eslint/config'


import perfectionist from "eslint-plugin-perfectionist";
import unusedImports from "eslint-plugin-unused-imports";
import hooksPlugin from "eslint-plugin-react-hooks";
import react from "eslint-plugin-react";
import stylistic from '@stylistic/eslint-plugin'
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';


import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import tsEslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([
    ...nextVitals,
    ...nextTs,
    eslint.configs.recommended,
    tsEslint.configs.recommended,
    globalIgnores([
        // Default ignores of eslint-config-next:
        '**/.next/**',
        '**/out/**',
        '**/build/**',
        '**/next-env.d.ts',
    ]),
    {
        ignores: ["**/eslint.config.mjs", "**/next.config.js"],
    },
    {
        plugins: {
            perfectionist,
            "unused-imports": unusedImports,
            "react-hooks": hooksPlugin,
            '@stylistic': stylistic,
            react
        },

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },

            parser: tsEslint.parser,
            ecmaVersion: "latest",
            sourceType: "module",

            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },

                project: "./tsconfig.json",
                tsconfigRootDir: __dirname,
            },
        },

        settings: {
            "import/resolver": {
                typescript: {
                    alwaysTryTypes: true,
                },
            },
            react: {
                version: "detect"
            }
        },

        rules: {
            // Formatting (indentation, quotes) is owned by Prettier (.prettierrc:
            // 4-space, single quotes) via `npm run prettier`. ESLint must not fight
            // Prettier over indentation, so the @stylistic indent/quotes rules stay off.
            '@stylistic/indent': 0,
            '@stylistic/quotes': 0,

            "no-alert": 0,
            camelcase: 0,
            "no-console": 0,
            "no-unused-vars": 0,
            "no-param-reassign": 0,
            "no-underscore-dangle": 0,
            "no-restricted-exports": 0,
            "no-nested-ternary": 0,
            "no-promise-executor-return": 0,
            "no-empty": 0,
            "no-case-declarations": 0,
            "no-prototype-builtins": 0,
            "react/no-children-prop": 0,
            "react/react-in-jsx-scope": 0,
            "react/prop-types": 0,
            "react-hooks/exhaustive-deps": 0,
            "jsx-a11y/anchor-is-valid": 0,
            "react/no-array-index-key": 0,
            "react/require-default-props": 0,
            "react/jsx-props-no-spreading": 0,
            "react/jsx-curly-brace-presence": 0,
            "react/display-name": 0,
            "react/no-unescaped-entities": 0,
            "import/no-anonymous-default-export": 0,
            "import/prefer-default-export": 0,
            "import/no-duplicates": "off",
            "react/function-component-definition": 0,
            "@typescript-eslint/naming-convention": 0,
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/no-empty-object-type": 0,
            "@typescript-eslint/no-unused-expressions": 0,
            "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
            "@typescript-eslint/ban-ts-comment": 0,
            "@typescript-eslint/no-use-before-define": 0,
            "jsx-a11y/control-has-associated-label": 0,
            "jsx-a11y/no-autofocus": 0,
            "@next/next/no-img-element": 0,

            "react/jsx-no-useless-fragment": [1, {
                allowExpressions: true,
            }],

            "prefer-destructuring": [1, {
                object: true,
                array: false,
            }],

            "react/no-unstable-nested-components": [1, {
                allowAsProps: true,
            }],

            "@typescript-eslint/no-unused-vars": [1, {
                args: "none",
                caughtErrors: "none",
                varsIgnorePattern: "^_",
                argsIgnorePattern: "^_",
            }],

            "react/jsx-no-duplicate-props": [1, {
                ignoreCase: false,
            }],

            "unused-imports/no-unused-imports": 1,

            "unused-imports/no-unused-vars": [0, {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            }],

            "perfectionist/sort-named-imports": [1, {
                order: "asc",
                type: "line-length",
            }],

            "perfectionist/sort-named-exports": [1, {
                order: "asc",
                type: "line-length",
            }],

            "perfectionist/sort-exports": [1, {
                order: "asc",
                type: "line-length",
            }],

            "perfectionist/sort-imports": [1, {
                order: "asc",
                type: "line-length",
                newlinesBetween: "always",

                groups: [
                    ["builtin", "external"],
                    "customMui",
                    "customRoutes",
                    "customHooks",
                    "customUtils",
                    "internal",
                    "customComponents",
                    "customSections",
                    "customTheme",
                    "customAssets",
                    "customTypes",
                    ["parent", "sibling", "index"],
                    "object",
                    "unknown",
                ],

                customGroups: {
                    value: {
                        customMui: "^@mui\\/.*",
                        customAssets: ["^src\\/assets\\/.*", "^@assets\\/.*"],
                        customRoutes: ["^src\\/routes\\/.*", "^@routes\\/.*"],
                        customHooks: ["^src\\/hooks\\/.*", "^@hooks\\/.*"],
                        customUtils: ["^src\\/utils\\/.*", "^@utils\\/.*"],
                        customComponents: ["^src\\/components\\/.*", "^@components\\/.*"],
                        customSections: ["^src\\/sections\\/.*", "^@sections\\/.*"],
                        customTheme: ["^src\\/theme\\/.*", "^@theme\\/.*"],
                        customTypes: ["^src\\/types\\/.*", "^@appTypes\\/.*"],
                    },
                },
                internalPattern: ["^src\\/.*", "^@base\\/.*"],
            }],

            "react-hooks/set-state-in-effect": 0,
            "react-hooks/set-state-in-render": 0,
            "react-hooks/preserve-manual-memoization": 0,
            "react-hooks/refs": 0,
            "react-hooks/purity": 0,
            "react-hooks/immutability": 0,
            "react-hooks/static-components": 0,
        },
    }
]);
