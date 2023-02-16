# 快速上手
本节将帮助你快速上手，了解如何使用创建一个基本的[扩展](capabilities-expansion)。

## 创建一个 AnyText 扩展
下面是一个字符统计的例子：

```js
let codeEditor

export const activate = ({ basic: { CodeEditor } }) => {
  return CodeEditor({ onRef: ref => codeEditor = ref })
}

export const run = ({ notification: { send } }) => {
  send(`字符数：${codeEditor.getValue().length}`)
}

export const config = {
  name: "字符统计",
  id: "character-count",
  version: "1.0.0",
  engine: "v0.0.1"
}
```

让我们创建一个名为 `character-count.js` 的文件，将上面的代码复制进去。

然后把这个文件拖动到 [AnyText](https:/anytext.cn) 中，接下来：

- 点击左侧 `默认分类` 图标，找到 `字符统计`，点击它
- 输入 `AnyText`，然后点击 `运行` 按钮
- 如果你看到了左下角提示 `字符数：7`，恭喜你成功了！

![字符统计](/character-count.png)

通过上述操作，我们已经创建了一个基本的扩展，现在的你应该对 AnyText 的工作方式有了一个基本的了解。

## 下一步?
到目前为止，你应该拥有一个基本的 AnyText 扩展。但现在还缺少一个可识别性的图标，要想添加扩展图标，我们必须向扩展添加一些配置。前往[资源引用](/guide/resources-refs)了解如何配置。

如果你想了解更多关于可以在 AnyText 中执行的操作，例如 `运行配置` 或使用 `React` 组件，请查看文档的 `开发` 部分。[开发：课前准备](/guide/) 将是一个很好的起点。

如果你想了解如何自定义 AnyText 的外观（主题），请访问 [界面元素：色彩主题](/guide/theme)。
