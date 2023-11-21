/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["prettier", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  env: {
    es6: true,
  },
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parserOptions: {
        ecmaVersion: "latest",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        // maybe re-enable this later, but it's annoying for now
        "no-empty-pattern": "off",
        // maybe re-eanble this later, but it's annoying for now
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/consistent-type-imports": "warn",
        // throw error, if promise isn't awaited, which is annoying
        "@typescript-eslint/no-floating-promises": "off",
        // ban specific types, like 'Function', as it could lead to errors
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              // un-ban a type that's banned by default
              "{}": false,
            },
            extendDefaults: true,
          },
        ],
        // throws error, if you call an 'any' function
        "@typescript-eslint/no-unsafe-call": "off",
        // throws error for stuff like this: 'null as any'
        "@typescript-eslint/no-unsafe-argument": "off",
        // throws error for stuff like this: 'const x = null as any'
        "@typescript-eslint/no-explicit-any": "off",
        // disables casting to 'any'
        "@typescript-eslint/no-unsafe-member-access": "off",
        // disables casting to 'any', and creating instances with,
        // an a constructor of type 'any'
        "@typescript-eslint/no-unsafe-assignment": "off",
        // throws stupid errors
        "@typescript-eslint/no-misused-promises": "off",
        // disallows return of 'any[]' value
        "@typescript-eslint/no-unsafe-return": "off",

        // allow any, because it's annoying
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowAny: true,
          },
        ],

        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/require-await": "off",
        "@next/next/no-img-element": "off",
        "react/display-name": "off",
      },
    },
  ],
  root: true,
  reportUnusedDisableDirectives: true,
  ignorePatterns: [".eslintrc.js"],
};

module.exports = config;
