module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // 'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    // npm i eslint-plugin-vue -D 处理 import 路径，位置要放在下面
    'plugin:import/typescript',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never',
        ts: 'never',
      },
    ],
  },
};
