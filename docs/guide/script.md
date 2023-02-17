# 打包脚本
本节我们将学习配置 Rollup 的打包命令来构建扩展。你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 配置打包命令
我们通常使在 `package.json` 中定义脚本命令，这样我们就可以在命令行中使用 `yarn` 来构建扩展。

打开项目目录下的 `package.json`，添加下面的代码：
```json
{
  "name": "my-extension",
  "version": "1.0.0",
  "type": "module", // [!code ++]
  "main": "index.js",
  "license": "MIT",
  "scripts": { // [!code ++]
    "build": "rollup -c" // [!code ++]
  }, // [!code ++]
  "devDependencies": {
    "@rollup/plugin-image": "^3.0.2",
    "rollup-plugin-cleanup": "^3.2.1",
    "rollup-plugin-terser": "^7.0.2"
  }
}
```

## 测试打包命令
在命令行中运行 `yarn build`，如果一切顺利，你将看到类似下面的输出：
```
➜  my-extension yarn build
yarn run v1.22.19
$ rollup -c

src/index.js → dist/my-extension.js...
created dist/my-extension.js in 277ms
✨  Done in 0.76s.
```

现在我们观察项目目录，你会发现多了一个 `dist` 文件夹，里面有一个 `my-extension.js` 文件，这就是我们打包后的扩展文件。

将 `dist/my-extension.js` 文件拖动到 [AnyText](https:/anytext.cn) 中安装测试，你将看到类似如下的界面：
![构建测试](/build-test.png)

如果你还不会安装扩展，请参考 [入门：安装与卸载](/manual/install-and-uninstall)。
