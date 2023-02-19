# useFunctionList
使用函数列表。

## 参数
```ts
type FunctionItem = {
  id: string,
  fn: Function,
}

function useFunctionList(initialList: FunctionItem[] | Function[] = []): {
  functionList: FunctionItem[];
  execute: () => void;
  remove: (id: string) => void;
  add: (fn: FunctionItem | Function) => void;
}
```
