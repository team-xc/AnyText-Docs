# 快速上手
本节提供了一些常见功能的代码示例，以便您快速上手 AnyText。你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 配置选项
当用户修改配置选项时触发事件。
```js
export const options = [
  {
    key: "setting.uppercaseMode",
    label: "大写模式",
    defaultValue: false,
    description: "是否将所有输出转换为大写",
    type: "boolean"
  }
]

export const mounted = (ctx) => {
  ctx.options.onChange("setting.uppercaseMode", false, (value) => {
    ctx.hooks.useToast(value ? "大写模式已开启" : "大写模式已关闭", "success")
  })
}
```

## 进度处理
当用户点击运行按钮时，进度条从 0% 走到 100%。
```js
let timer = null

export const run = (ctx) => {
  clearInterval(timer)
  ctx.progress.reset()
  
  timer = setInterval(() => {
    ctx.progress.add(1)
  }, 100)
}
```

## 消息通知
当用户点击运行按钮时，显示一个通知，附加眨眼动画。
```js
export const run = (ctx) => {
  ctx.notification.send("\\f[f=alternate]正在运行", "success")
}
```
