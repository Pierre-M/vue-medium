module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: ["prettier", "@typescript-eslint", "simple-import-sort", "unused-imports"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "error",
  },
  ignorePatterns: ["dist"],
};
