# 生命周期
每个扩展在使用时都会经历一系列的生命周期，比如开始处理、中止处理等等。
在此过程中，它会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。

## 注册周期钩子
```js
export const activate = () => {
  console.log("activate")
  return () => "Hello World"
}

export const mounted = () => {
  console.log("mounted")
}

export const run = () => {
  console.log("run")
}

export const abort = () => {
  console.log("abort")
}

export const visible = () => {
  console.log("visible")
}

export const invisible = () => {
  console.log("invisible")
}

export const deactivate = () => {
  console.log("deactivate")
}
```

## 生命周期类型定义
```ts
interface Lifecycle {
  activate: (context: ExtensionContext) => () => React.ReactNode | string
  mounted?: (context: ExtensionContext) => void
  run?: (context: ExtensionContext) => void
  abort?: (context: ExtensionContext) => void
  visible?: (context: ExtensionContext) => void
  invisible?: (context: ExtensionContext) => void
  deactivate?: (context: ExtensionContext) => void
}
```
关于 `ExtensionContext` 的详细信息，请参阅 [API：总揽](/api/)。

## 生命周期图示
![lifecycle](/lifecycle.png)

## 生命周期钩子

### activate
`activate` 是一个必须的生命周期钩子，它会在扩展被激活时调用。它需要返回一个函数式组件，这个组件会被渲染到扩展的容器中。

值得注意的是：
- 渲染 AnyText 预设的基础组件时，会直接渲染到扩展容器中
- 渲染自定义组件或者字符串时，会被包裹在一个 `iframe` 中

了解更多基础组件的信息，请参阅 [基础组件](basic-components)。

### mounted
`mounted` 是一个可选的生命周期钩子，它会在扩展组件渲染完成后调用。

### run
`run` 是一个可选的生命周期钩子，它会在用户点击运行时调用。它的功能类似于 `mounted`，但是它会在每次运行时被调用。

### abort
`abort` 是一个可选的生命周期钩子，它会在用户点击中止时调用。该钩子不会强制中止扩展的运行，需要开发者根据自身逻辑处理。
触发该钩子时，扩展的处理状态会被设置为 `aborting`，只有手动调用 `context.progress.hide()` 才会重置处理状态。

要了解更多关于 `context.progress` 的信息，请参阅 [API：进度 (Progress)](/api/progress)。

### visible
`visible` 是一个可选的生命周期钩子，它会在扩展页面显示时调用。

### invisible
`invisible` 是一个可选的生命周期钩子，它会在扩展页面隐藏时调用。

### deactivate
`deactivate` 是一个可选的生命周期钩子，它会在扩展被销毁时调用。它最主要的功能是在销毁实例时清理扩展的副作用。