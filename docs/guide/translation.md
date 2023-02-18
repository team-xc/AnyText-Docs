# 语言翻译
AnyText 允许你添加本地化支持，以针对特定地区的语言进行翻译。
你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 基本配置
AnyText 的语言包是一个 `Json` 文件，它包含了一些翻译文本，下面是一个简单的例子：
```json
{
  "name": "Example",
  "description": "This will be the intro. The detail descriptions...",
  "id": "example",
  "icon": "far fa-smile",
  "version": "1.0.0",
  "author": {
    "name": "Your Name",
    "url": "https://example.com"
  },
  "engine": "v0.0.1",
  "language": "example",
  "dictionary": {
    "other": {
      "onlineResources": "This is a online resource."
    }
  }
}
```
这个语言包修改了 `other.onlineResources` 的文本，将其翻译为 `This is a online resource.`。

测试
- 切换语言
![切换语言](/switch-language.png)
- 翻译后的效果
![语言预览](/language-preview.png)

如果你还不会安装语言包，请参考 [入门：安装与卸载](/manual/install-and-uninstall)。

::: tip 提示
AnyText 默认以预设的 `zh-CN` 语言包作为回退语言包，只需要修改你想要修改的部分即可。想了解完整的 `zh-CN` 语言包文件，请参阅 [文本翻译](text-translation)。
:::

## 语言包的类型定义
```ts
interface LanguagePack {
  name: string
  description?: string
  id: string
  icon?: string
  version: string
  author?: {
    name?: string
    url?: string
  }
  engine: string,
  language: string,
  dictionary: Dictionary
}

interface Dictionary {
  [key: string]: Dictionary | string
}
```

语言包配置和扩展配置大致相同，请参阅 [基本配置](basic-config)。以下是语言包的特殊配置项：
- `language`：语言包的语言代码，例如 `zh-CN`、`en-GB` 等。
- `dictionary`：语言包的翻译文本，它是一个 `Dictionary` 类型的对象，它的键是翻译文本的路径，值是翻译后的文本。
