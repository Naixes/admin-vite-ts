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

### css

rem，不手写，工具编译，postcss提供或者pxtorem

react，没提供css scope，可以使用cssloader配置cssmodule，配置以module.css结尾的css开启module，全局不需要；或者使用css in js

预渲染，在build时执行的，postbuild中执行预渲染命令通过无头浏览器将代码执行获取到html字符串，生成到build目录下；ssr更适合动态网站

> `prerender-spa-plugin`预渲染原理，在 webpack 构建阶段的最后，在本地启动一个 phantomjs，访问配置了预渲染的路由，再将 phantomjs 中渲染的页面输出到 html 文件中，并建立路由对应的目录。它是一个 webpack 插件用于在单页应用中预渲染静态 html 内容。因此，该插件限定了你的单页应用必须使用 webpack 构建，且它是框架无关的
>
> 如果想用预渲染来减少白屏时间，让页面反馈更及时的话，可以预渲染骨架屏。
>
> `react-snap`，基于react框架的，两年没维护，基于无头浏览器

cssnano，去除无用css，基于postcss

vite不建议生产使用

react，snowpack