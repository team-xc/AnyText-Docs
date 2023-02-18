# 消息通知
AnyText 通知区域位于左下角，参考 [认识界面：通知区域](/manual/interface#通知区域)。使用通知 API 可以正确的通知用户消息，一般用来显示一些处理结果，它会保留在通知面板中，直到用户清除或关闭。

通知内容支持富文本格式，了解更多信息，请参阅 [useRTF](/api/use-rtf)。

::: tip 提示
通知 API 位于 [ExtensionContext](/api/) 的 `notification` 属性中，你可以通过 context.notification 来访问它们。
了解更多消息通知的信息，请参阅 [API：通知 (Notification)](/api/notification)。
:::

## 发送通知
```js
ctx.notification.send("Hello World!", "info")
```

## 设置文本格式
```js
// 红色
ctx.notification.send("\\f[c=red]Hello World!")

// 绿色字体，加粗
ctx.notification.send("\\f[c=green,b]Hello World!")

// 黑色背景，白色字体
ctx.notification.send("\\f[b=black,c=white]Hello World!")

// 眨眼动画
ctx.notification.send("\\f[f=alternate]Hello \\f[f=alternate-reverse]World!")
```
