# useRTFText
使用此 Hook 可以使用链式 API 来创建 RTF 格式文本。

## 参数
```ts
type  RTFText = {
  color: (color: string) => RTFText,
  backgroundColor: (color: string) => RTFText,
  bold: () => RTFText,
  apply: () => string,
}

function useRTFText(text: string): RTFText
```

## 说明
- `color`：设置文本颜色。
- `backgroundColor`：设置文本背景颜色。
- `bold`：设置文本加粗。
- `apply`：应用设置并返回 RTF 格式文本。

## 示例
```js
console.log(useRTFText('Hello World').color('red').apply())
// => \f[c=red,]Hello World\f[r]
```
