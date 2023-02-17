# 自定义组件
本节需要你对 [React](https://zh-hans.reactjs.org/) 有一定的了解，我们将学习如何渲染一个 React 组件。你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 书接上文
在 [上一节：打包脚本](script) 中，我们学习了如何使用构建工具打包扩展，现在我们的项目结构大概是这样的：
```
my-extension
├── dist
│   └── my-extension.js
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

## 安装 Rollup 插件
- [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)：将 CommonJS 模块转换为 ES6
- [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)：告诉 Rollup 如何查找外部模块
- [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)：替换代码中的字符串

打开命令行，输入下面的命令安装插件：
```bash
yarn add -D @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-replace
```

## 安装 Babel
Babel 是一个 JavaScript 编译器，可以将 ES6 代码转换为 ES5 代码，以便在不支持 ES6 的浏览器中运行。

打开命令行，输入下面的命令安装 Babel：
```bash
yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @rollup/plugin-babel
```

## 安装 React
打开命令行，输入下面的命令安装 React：
```bash
yarn add react react-dom
```

## 配置 Rollup
打开 `rollup.config.js`，添加下面的代码：
```js
import image from "@rollup/plugin-image"
import { terser } from "rollup-plugin-terser"
import cleanup from "rollup-plugin-cleanup" 
import resolve from "@rollup/plugin-node-resolve" // [!code ++]
import commonjs from "@rollup/plugin-commonjs" // [!code ++]
import { babel } from "@rollup/plugin-babel" // [!code ++]
import replace from "@rollup/plugin-replace" // [!code ++]

export default {
  input: "src/index.js",
  output: {
    file: "dist/my-extension.js",
    format: "es"
  },
  plugins: [
    resolve(), // [!code ++]
    commonjs(), // [!code ++]
    babel({ // [!code ++]
      babelHelpers: "runtime", // [!code ++]
      plugins: ["@babel/plugin-transform-runtime"], // [!code ++]
      exclude: "node_modules/**" // [!code ++]
    }), // [!code ++]
    replace({ // [!code ++]
      preventAssignment: true, // [!code ++]
      "process.env.NODE_ENV": JSON.stringify("production") // [!code ++]
    }), // [!code ++]
    image(),
    terser(),
    cleanup() 
  ]
}
```

## 配置 Babel
在项目根目录下创建 `.babelrc` 文件，添加下面的代码：
```json
{
  "presets": [
    ["@babel/preset-env", { "modules": false }],
    ["@babel/preset-react"]
  ],
  "plugins": [["@babel/plugin-transform-runtime"]]
}
```

## 编写 React 组件
在 `src` 目录下创建 `components` 目录，然后在 `components` 目录下创建 `Counter.jsx` 文件，添加下面的代码：
```jsx
import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: props.count }
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return <button onClick={this.increase}>count is {this.state.count}</button>
  }
}

export default Counter
```

::: warning 注意
AnyText 暂不支持使用 React Hooks，请使用类组件。
:::

## 引用 React 组件
将 `src/index.js` 文件更改为 `src/index.jsx`，接着添加下面的代码：
```jsx
import React from "react" // [!code ++]
import Counter from "./components/Counter.jsx" // [!code ++]

export const activate = () => {
  return () => "<h1>Hello World!</h1>" // [!code --]
  return () => <Counter count={0} /> // [!code ++]
}

export { config } from "./config.js"
```

## 修改配置文件
打开 `rollup.config.js`，修改 `input` 属性为 `src/index.jsx`：
```js
import image from "@rollup/plugin-image"
import { terser } from "rollup-plugin-terser"
import cleanup from "rollup-plugin-cleanup" 
import resolve from "@rollup/plugin-node-resolve" 
import commonjs from "@rollup/plugin-commonjs" 
import { babel } from "@rollup/plugin-babel" 
import replace from "@rollup/plugin-replace" 

export default {
  input: "src/index.js", // [!code --]
  input: "src/index.jsx", // [!code ++]
  output: {
    file: "dist/my-extension.js",
    format: "es"
  },
  plugins: [
    resolve(), 
    commonjs(), 
    babel({ 
      babelHelpers: "runtime", 
      plugins: ["@babel/plugin-transform-runtime"], 
      exclude: "node_modules/**" 
    }), 
    replace({ 
      preventAssignment: true, 
      "process.env.NODE_ENV": JSON.stringify("production") 
    }), 
    image(),
    terser(),
    cleanup() 
  ]
}
```

如果你顺利完成了上述操作，你的目录结构应该是这样的：
```
my-extension
├── dist
│   └── my-extension.js
├── node_modules
├── src
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── Counter.jsx
│   ├── config.js
│   └── index.jsx
├── .babelrc
├── package.json
├── rollup.config.js
└── yarn.lock

```

## 打包测试
打开命令行，输入下面的命令打包：
```bash
yarn build
```

将 `dist/my-extension.js` 文件拖动到 [AnyText](https:/anytext.cn) 中安装测试，你将看到类似如下的界面：
![自定义组件](/custom-component.png)

如果你还不会安装扩展，请参考 [入门：安装与卸载](/manual/install-and-uninstall)。
