# 选项 (Options)

## set()
设置选项配置
- 类型
```ts
set: (key: string, value: string | number | boolean) => void
```

## get()
获取选项配置
- 类型
```ts
get: (key: string, defaultValue?: string | number | boolean) => string | number | boolean
```

## onChange()
监听选项配置变化，返回一个取消监听的函数 `destroy`
- 类型
```ts
onChange: (key: string, defaultValue: string | number | boolean, callback: (value: string | number | boolean) => void) => { 
  destroy: () => void
}
```

## onChanges()
监听所有选项配置变化，返回一个取消监听的函数 `destroy`
- 类型
```ts
onChanges: (callback: (key: string | null, value: string | number | boolean | null) => void) => { 
  destroy: () => void 
}
```
- 详细信息：如果返回的 `key` 和 `value` 都为 `null`，则表示所有选项配置被清空了
