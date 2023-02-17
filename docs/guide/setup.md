# 环境搭建
本节将介绍推荐的开发环境搭建流程。如果某些软件已经安装完成，可以跳过对应的步骤。

## 安装 Node.js
Node.js 是一个开源、跨平台的 JavaScript 运行时环境。

### 下载 Node.js
请访问 [Node.js 官网](https://nodejs.org/en/)，下载最新的 LTS 版本。

### 安装 Node.js
运行下载好的安装包，根据提示完成整个安装流程即可。

## 安装 Yarn
Node.js 自带名为 npm 的包管理器，你可以直接使用它。我们同时也推荐功能更强大的 yarn 作为包管理器。它的安装非常简单，只需打开命令行输入下面的命令：
```bash
# 安装 yarn
npm i -g yarn

# 查看版本
yarn -v
```

## 安装 Rollup
Rollup 是一个 JavaScript 模块打包器。它可以将小块代码编译成大块复杂的代码，用于生产环境。当然也可以使用其他的打包工具，如 Webpack。本节我们将使用 Rollup。

打开命令行，输入下面的命令安装 Rollup：
```bash
# 安装 Rollup
yarn global add rollup

# 查看版本
rollup -v
```

## 创建项目
打开命令行，输入下面的命令：
```bash
# 创建一个项目
mkdir my-extension && cd my-extension

# 初始化项目
yarn init -y
```

如果你顺利完成了上述操作，你的目录结构应该是这样的：
```
my-extension
└── package.json
```

接下来的几节中我们将学习更多的内容。
