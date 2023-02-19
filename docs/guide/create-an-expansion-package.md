# 打包分享
扩展包本质是一个 `zip` 文件，它包含了一个 `manifest.json` 文件和资源文件。你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 打包扩展包
我们的目录结构如下：
```
Foo
├── extensions
│   ├── 进度处理.js
│   ├── 配置选项.js
│   ├── 消息通知.js
│   └── 字符统计.js
├── languages
│   └── 示例语言包.json
├── themes
│   └── 示例主题.json
└── manifest.json
```

将这些文件压缩成一个 `zip` 文件，然后将其拖动到 [AnyText](https:/anytext.cn) 中安装即可。

如果你还不会安装扩展包，请参考 [入门：安装与卸载](/manual/install-and-uninstall)。

## 预览效果
![扩展包安装预览](/extension-pack-install-preview.png)
![扩展包预览](/extension-pack-preview.png)
