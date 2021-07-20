### 代码规范

1. prettier

2. eslint

​	`npx eslint --init`

<img src="README.assets/截屏2021-06-21 下午5.54.31.png" alt="截屏2021-06-21 下午5.54.31" style="zoom:50%;" />

​	vue3中使用vue/vue3-recommended

```js
// .eslintrc
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
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
  },
};
```

3. 配合prettier和eslint：安装插件eslint-plugin-rettier和eslint-config-prettier

```js
// .eslintrc
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
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {},
};

```

4. husky，commit时检查代码，版本4和现在版本的配置不一样

​	`npx husky-init && npm install`

```cmd
# pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

```js
// package.json
  "lint-staged": {
    "*.{vue,ts,js}": "eslint --fix"
  }
```

​	配置lint-staged`npx lint-staged`

5. commitlint，fix，feat，doc...

​	`npm install --save-dev @commitlint/{config-conventional,cli}`

```js
// commitlint.config.js
module.exports = { extends: ['@commitlint/config-conventional'] };
```

```cmd
# Add hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

> editorconfig，插件，跨编辑器配置

### antd

`npm i ant-design-vue@2`

按需加载vite不支持

### router

```
npm install vue-router@4
```

> 安装 eslint-plugin-import，处理 import 路径
>
> 配置添加：
>
> ```js
>   extends : ['plugin:import/typescript',...],
>   rules: {
>     'import/extensions': [
>       'error',
>       'ignorePackages',
>       {
>         js: 'never',
>         ts: 'never',
>         vue: 'never',
>       },
>     ],
>   },
> ```
>
> 重启编辑器