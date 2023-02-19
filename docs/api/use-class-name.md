# useClassName
使用类名，一般配合 `*.module.less` 使用。

## 参数
```ts
type ClassNameType = string | (string | { [key: string]: boolean })[]

function useClassName(styles: CSSModuleClasses, className: ClassNameType): string
```

## 说明
`useClassName` 会将 `className` 中的 `string` 类型的值转换为 `styles` 中的类名，如果 `className` 中的值为 `object` 类型，则会将 `object` 中的 `key` 作为 `styles` 中的类名，`value` 为 `true` 时，添加类名，否则不添加。
