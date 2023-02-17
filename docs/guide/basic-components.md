# 基础组件
本节将教你如何设置 AnyText 扩展的基础视图。
由于扩展是图形化的，扩展本身需要为 AnyText 渲染提供一个组件，因此，AnyText 为扩展预设了一些基本组件。
当然也可以选择自定义组件，了解更多请参考 [自定义组件](custom-component)。

## 预设组件
以下是 AnyText 预设的基础组件：
- [代码编辑器 (CodeEditor)](/api/code-editor)
- [差异编辑器 (DiffEditor)](/api/diff-editor)
- [代码编辑器和差异编辑器 (CodeEditorWithDiffEditor)](/api/code-editor-with-diff-editor)
- [双代码编辑器 (DualCodeEditor)](/api/dual-code-editor)

这些基础组件位于 `ExtensionContext` 的 `basic` 属性中，你可以通过 `context.basic` 来访问它们。

## 使用预设组件
```js
export const activate = (ctx) => {
  return ctx.basic.CodeEditor({
    language: "javascript",
    value: "console.log('Hello World!')"
    // ...
  })
}
```
请参阅相应的组件页面以了解更多信息。

::: tip 提示
预设的组件本身是一个函数式组件，因此可以直接在 `activate` 钩子中返回。
:::

## 下一步？
- [进阶开发：环境搭建](setup)
- [交互基础：快速上手](examples)
- [资源：示例项目](/resources/examples)