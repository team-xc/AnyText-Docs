# 配置文件
本节我们将学习如何配置 Rollup。

## 创建配置文件
打开命令行，输入下面的命令：
```bash
# 创建配置文件
touch rollup.config.js
```

## 编写配置文件
打开 `rollup.config.js`，输入下面的代码：
```js
export default {
  input: "src/index.js",
  output: {
    file: "dist/my-extension.js",
    format: "es"
  },
}
```

## 可选插件
Rollup 有很多插件，可以帮助我们优化代码。这里我们推荐安装以下插件：
- [@rollup/plugin-image](https://www.npmjs.com/package/@rollup/plugin-image)
- [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)
- [rollup-plugin-cleanup](https://www.npmjs.com/package/rollup-plugin-cleanup)

打开命令行，输入下面的命令安装插件：
```bash
# 安装插件
yarn add -D @rollup/plugin-image rollup-plugin-terser rollup-plugin-cleanup
```

修改 `rollup.config.js`
```js
import image from "@rollup/plugin-image" // [!code ++]
import { terser } from "rollup-plugin-terser" // [!code ++]
import cleanup from "rollup-plugin-cleanup" // [!code ++]

export default {
  input: "src/index.js",
  output: {
    file: "dist/my-extension.js",
    format: "es"
  },
  plugins: [ // [!code ++]
    image(), // [!code ++]
    terser(), // [!code ++]
    cleanup() // [!code ++]
  ] // [!code ++]
}
```

## 创建扩展文件
如果你顺利完成了上述操作，你的目录结构应该是这样的：
```
my-extension
├── node_modules
├── package.json
├── rollup.config.js
└── yarn.lock
```

让我们创建一个 `src` 目录，用来存放我们的扩展文件，接着在 `src` 目录下创建 `assets` 目录，用来存放我们的资源文件。

然后找一张你喜欢的图片，将它放到 `src/assets` 目录下，命名为 `logo.png`。

接着在 `src` 目录下创建 `config.js`，用来存放我们的配置文件，输入下面的代码：
```js
import logo from "./assets/logo.png"

export const config = {
  name: "My Extension",
  id: "my-extension",
  icon: logo,
  version: "1.0.0",
  engine: "v0.0.1"
}
```

::: warning 注意
`config` 不支持 `export default`，必须使用 `export const config = {}`。
:::

最后在 `src` 目录下创建 `index.js`，输入下面的代码：
```js
export const activate = () => {
  return () => "<h1>Hello World!</h1>"
}

export { config } from "./config.js"
```

现在你的目录结构应该是这样的：
```
my-extension
├── node_modules
├── src
│   ├── assets
│   │   └── logo.png
│   ├── config.js
│   └── index.js
├── package.json
├── rollup.config.js
└── yarn.lock
```
