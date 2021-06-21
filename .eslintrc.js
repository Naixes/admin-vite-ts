module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/essential',
    // npm i eslint-plugin-vue -D
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};
