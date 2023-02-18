# 色彩主题
AnyText 允许你修改用户界面中的 `颜色`、`图标`、`动画` 或 `编辑器的配色方案`，以适应你的个人喜好。
你可以在 [资源：示例项目](/resources/examples) 中找到本节教程的完整代码。

## 基本配置
AnyText 的主题配置是一个 `Json` 文件，它包含了一些颜色和图标的定义，下面是一个简单的例子：
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
  "colors": {
    "start.page.background": "#808080"
  },
  "icons": {
    "logo.icon": "far fa-smile"
  }
}
```
这个主题修改了以下内容：
- `启动页` 的背景颜色为灰色
- `Logo` 的图标为笑脸

测试
- 切换主题
![切换主题](/switch-theme.png)
- 预览效果
![启动页](/theme-preview.png)

如果你还不会安装主题，请参考 [入门：安装与卸载](/manual/install-and-uninstall)。

::: tip 提示
AnyText 默认以预设的 `Dark` 主题作为回退主题，只需要修改你想要修改的部分即可。想了解完整的 `Dark` 主题文件，请参阅 [主题颜色](color-theme)。
:::

## 主题颜色的类型定义
```ts
type ThemeField = 'colors' | 'rules' | 'width' | 'height' | 'border' | 'radius' | 'shadow' | 'transition' | 'animation' | 'transitions' | 'keyframes' | 'size' | 'icons'
type ThemeDistinctive = Extract<ThemeField, 'rules' | 'keyframes' | 'transitions'>

type ThemeObject = Partial<{
  [identifier in Exclude<ThemeField, ThemeDistinctive>]: Partial<typeof DarkTheme[identifier]>
} & ThemeEditorRules & ThemeKeyframes & ThemeTransitions>

interface ThemeEditorRules {
  rules: {
    token: string
    foreground?: string
    background?: string
    fontStyle?: string
  }[]
}

interface ThemeKeyframes {
  keyframes: {
    [identifier: string]: {
      [rules: string]: string 
    }
  }
}

interface ThemeTransitions {
  transitions: {
    [identifier: string]: {
      from: string,
      enter: string,
      leave: string,
      duration: string
    }
  }
}
```

## 主题配置的类型定义
```ts
interface Theme extends ThemeObject {
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

主题配置和扩展配置类似，请参阅 [基本配置](basic-config)。
