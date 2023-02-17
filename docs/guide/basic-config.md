# 基本配置
AnyText 通过动态引用 [ESM 模块](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules) 的方式来加载扩展，简单来说一个模块就是一个扩展。

一般情况下，只需要一个 js 文件就可以完成一个扩展的开发，也可以使用构建工具来打包多个文件，你可以在 [进阶开发：环境搭建](setup) 中了解更多。

不管哪种方式，扩展本身需要暴露一个 `配置对象` 以及 `生命周期钩子` 函数，这些函数会在 AnyText 的生命周期中被调用。

## 理解配置对象
配置对象是一个包含了扩展的所有配置信息的对象，它的结构如下：
```js
export const config = {
  // 扩展名称
  name: "example",
  // 扩展描述
  description: "This will be the intro. The detail descriptions...",
  // 扩展 ID
  id: "example",
  // 扩展图标
  icon: "https://example.com/icon.png",
  // 扩展版本
  version: "1.0.0",
  // 扩展作者
  author: {
    name: "Your Name",
    url: "https://example.com"
  },
  // 目标版本
  engine: "v0.0.1"
}
```

以下是配置对象的类型定义：
```ts
interface Config {
  name: string
  description?: string
  id: string
  icon?: string
  version: string
  author?: {
    name?: string
    url?: string
  }
  engine: string
}
```

::: warning 警告
不要使用动态的值来填充配置对象，因为这些值会在扩展加载时被解析，而不是在运行时。
:::

## 具体而言

### 扩展名称
`name` 字段是扩展的名称，它会在扩展列表中显示

### 扩展描述
`description` 字段是扩展的描述，它会在扩展信息中显示

### 扩展 ID
`id` 字段是扩展的唯一标识

### 扩展图标
`icon` 字段是扩展的图标，它支持：
- base64 编码的图片：`png`、`gif`、`svg`
- http 或 https 协议的图片链接：`png`、`jpg`、`gif`、`svg`、`jpeg`、`webp`、`jfif`、`bmp`、`dpg`
- Anytext 字体图标：`anytext`
- Material Design Icons 字体图标：`mdi`
- Font Awesome Pro 字体图标：`fas`、`far`、`fal`、`fad`、`fab`

### 扩展版本
`version` 字段是扩展的版本号

### 扩展作者
`author` 字段是扩展的作者信息，它支持：
- `name`：作者名称
- `url`：作者链接

### 目标版本
`engine` 字段是扩展的目标 AnyText 版本，它用来限制扩展的兼容性，它支持：
- 指定版本：`v0.0.1`
- 大于某个版本：`>v0.0.1`
- 小于某个版本：`<v0.0.1`
- 大于等于某个版本：`>=v0.0.1`
- 小于等于某个版本：`<=v0.0.1`
- 不等于某个版本：`!=v0.0.1`
- 匹配所有版本：`*`