# 清单文件
扩展包是一个包含了一些扩展的合集，它可以对扩展进行分组，以便于管理。扩展包可以包含任意数量的 `扩展`、`主题`、`语言包`，但分组仅对扩展有效，分组中的扩展可以和未分组的扩展共存。
你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 示例扩展包
```
Foo
├── extensions
│   ├── 进度处理.js
│   ├── 配置选项.js
│   ├── 消息通知.js
│   └── 字符统计.js
├── languages
│   └── 示例语言包.json
├── themes
│   └── 示例主题.json
└── manifest.json
```

## 清单文件
清单文件是一个 `json` 文件，它包含了扩展包的基本信息，以及扩展包中的扩展、主题、语言包的信息。命名为 `manifest.json`，放在扩展包的根目录下。
```json
{
  "extension": {
    "name": "示例扩展包",
    "id": "example",
    "description": "这是一个示例扩展包",
    "icon": "F",
    "author": {
      "name": "作者",
      "url": "https://example.com"
    },
    "groups": [
      {
        "name": "示例分组 A",
        "extensions": [
          "extensions/进度处理.js",
          "extensions/配置选项.js"
        ]
      },
      {
        "name": "示例分组 B",
        "extensions": [
          "extensions/消息通知.js",
          "extensions/字符统计.js"
        ]
      }
    ]
  },
  "themes": ["themes/示例主题.json"],
  "languages": ["languages/示例语言包.json"]
}
```

## 清单文件的类型定义
```ts
interface Manifest {
  extension?: ExtensionManifest
  themes?: string[]
  languages?: string[]
}

interface ExtensionManifest {
  id: string
  name: string
  description?: string
  icon?: string
  author?: {
    name?: string
    url?: string
  }
  groups?: ExtensionGroup[]
}

interface ExtensionGroup {
  name: string
  extensions: string[]
}
```

## 清单文件的字段说明
`ExtensionManifest` 字段和扩展配置大致相同，请参阅 [基本配置](basic-config)。以下是特殊配置项：
- `icon`：扩展包的图标，和扩展配置类似。但额外支持解析以 `png`、`gif`、`svg` 结尾的引用路径，如 `icon: "path/to/icon.png"`。
- `name`：扩展包的名称，如果 `icon` 不存在，则会使用 `name` 的第一个字符作为图标。
