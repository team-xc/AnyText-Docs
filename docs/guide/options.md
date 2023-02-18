# 运行配置
AnyText 允许扩展使用存储API，提供一系列的 `键值对` 接口，可以用来存储扩展的配置信息。同一个扩展在不同分类下的配置是独立的，不会相互影响。

::: tip 提示
配置选项的 API 位于 [ExtensionContext](/api/) 的 `options` 属性中，你可以通过 context.options 来访问它们。
了解更多配置选项的信息，请参阅 [API：选项 (Options)](/api/options)。
:::

## 声明配置
和 `配置对象` 一样，通过暴露 `options` 属性来声明配置。

```js
export const options = [
  {
    key: "setting.fontSize",
    label: "字体大小",
    description: "设置字体大小（12～24）",
    hidden: false,
    disabled: false,
    defaultValue: 14,
    validator: (value) => value >= 12 && value <= 24,
    type: "number"
  }
]
```

## 配置选项的类型定义
```ts
interface Option {
  key: string
  label: string
  description?: string
  hidden?: boolean
  disabled?: boolean
  defaultValue?: string | number | boolean
  validator?: RegExp | ((value: string | number | boolean) => boolean)
  type?: "string" | "number" | "boolean"
}

type Options = Array<Option>
```

::: tip 提示
选项中的 `description` 字段支持富文本格式，了解更多信息，请参阅 [useRTF](/api/use-rtf)。
:::

## 读取配置
```js
ctx.options.get("setting.fontSize", 14)
```

## 设置配置
```js
ctx.options.set("setting.fontSize", 16)
```

## 监听所有配置的变化
```js
const destroy = ctx.options.onChanges((key, value) => {
  console.log(key, value)
})
```

## 监听指定配置的变化
```js
const destroy = ctx.options.onChange("setting.fontSize", 16, (value) => {
  console.log(value)
})
```
