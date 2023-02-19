# useTimeout
为函数添加超时功能。

## 参数
```ts
function <T extends (...args: any) => any>(fun: () => any, time: number = 1000): Promise<T>
```
