# 进度处理
每个扩展激活时都会附加一个进度状态，默认是隐藏的。当处理耗时较长的操作时，可以通过调用进度 API 来显示进度状态。

只有进度大于等于 `0` 时，才会显示进度状态。如果进度小于 `0`，进度状态将会隐藏。除此之外，进度状态默认为 `processing`，当用户手动中止操作时，进度状态会变为 `aborting`。

::: tip 提示
进度 API 位于 [ExtensionContext](/api/) 的 `progress` 属性中，你可以通过 context.progress 来访问它们。
了解更多进度处理的信息，请参阅 [API：进度 (Progress)](/api/progress)。
:::

## 设置进度
```js
ctx.progress.set(0)
```

## 获取进度
```js
ctx.progress.get()
```

## 增加进度
```js
ctx.progress.add(1)
```

## 减少进度
```js
ctx.progress.sub(1)
```

## 重置进度
```js
ctx.progress.reset()
```

## 隐藏进度
```js
ctx.progress.hide()
```
