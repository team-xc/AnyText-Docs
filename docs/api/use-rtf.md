# useRTF
使用此 Hook 可以将富文本转换为 React 节点。

## 参数
```ts
function useRTF(text: string): React.ReactNode[]
```

## 说明
- 前缀：`\f[`
- 后缀：`]`
- 赋值：`=`
- 分隔符：`,`

## 规则
| 规则 | 说明 | 需要参数 |
| --- |--| --- |
| `c` | 字体颜色 | 是 |
| `b` | 背景颜色 | 是 |
| `br` | 圆角 | 是 |
| `r` | 清除样式 |  |
| `h` | 隐藏 |  |
| `b` | 粗体 |  |
| `i` | 斜体 |  |
| `u` | 下划线 |  |
| `s` | 删除线 |  |
| `f` | 眨眼效果 |  |
| `rtl` | 从右到左 |  |
| `f` | 眨眼动画 | `normal`<br>`normal-reverse`<br>`alternate`<br>`alternate-reverse` |

## 超链接
```js
const text = `[example](https://example.com)`
```

## 使用示例
```js
// 红色字体
const text = `\f[c=red]Hello World!`

// 红色字体，背景为黄色，圆角为 5px
const text = `\f[c=red,b=yellow,br=5px]Hello World!`

// 红色字体，背景为黄色，圆角为 5px，粗体，斜体，下划线，删除线，从右到左
const text = `\f[c=red,b=yellow,br=5px,b,i,u,s,rtl]Hello World!`

// 红色字体，背景为黄色，圆角为 5px，粗体，斜体，下划线，删除线，从右到左，眨眼效果
const text = `\f[c=red,b=yellow,br=5px,b,i,u,s,rtl,f]Hello World!`

// 红色字体，背景为黄色，圆角为 5px，粗体，斜体，下划线，删除线，从右到左，指定眨眼动画
const text = `\f[c=red,b=yellow,br=5px,b,i,u,s,rtl,f=alternate]Hello World!`

// 多个文本
const text = `\f[c=red]Hello World!\f[c=blue]Hello World!`

// 清除样式
const text = `\f[c=red]Hello World!\f[r]Hello World!`
```
