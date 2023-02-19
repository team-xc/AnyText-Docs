# useResizeListener
监听元素的大小变化。

## 参数
```ts
function useResizeListener(element: Element, callback: (size: { width: number, height: number }) => void): {
  destroy: () => void
}
```

## 说明
监听元素的大小变化，当元素大小发生变化时，会触发回调函数。返回一个销毁函数，用于销毁监听。
