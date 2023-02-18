# 文本翻译
本节提供了一些 AnyText 的预设语言包。

::: tip 提示
翻译文本中以 `{}` 包裹的内容为变量，会被替换为对应的值。
:::

## zh-CN
```json
{
  "extension": {
    "install": {
      "parseFailed": "扩展解析失败：“{name}”。",
      "validateFailed": "扩展验证失败：“{name}”。",
      "engineNotMatch": "扩展引擎版本不匹配：“{name}”。",
      "alreadyInstalled": "扩展已安装：“{name}”。",
      "installFailed": "扩展安装失败：“{name}”。",
      "installSuccess": "扩展安装成功：“{name}”。",
      "notFound": "未找到扩展：“{name}”。"
    },
    "uninstall": {
      "failed": "扩展卸载失败：“{name}”。",
      "success": "扩展卸载成功：“{name}”。",
      "inUse": "扩展正在使用中，无法卸载：“{name}”。"
    },
    "unnamed": "未命名扩展",
    "unknown": "未知扩展",
    "groups": {
      "unnamed": "未命名分组"
    },
    "notFound": "未找到扩展",
    "error": {
      "loadFailed": "扩展加载失败：“{name}”。",
      "noView": "扩展未提供视图：“{name}”。"
    },
    "options": {
      "title": "扩展选项",
      "save": "保存",
      "cancel": "取消"
    },
    "info": {
      "id": "ID：{id}",
      "name": "名称：{name}",
      "description": "描述：{description}",
      "author": {
        "name": "作者：{name}",
        "url": "作者网址：{url}"
      },
      "version": "版本：{version}",
      "engine": "引擎版本：{engine}"
    }
  },
  "theme": {
    "install": {
      "parseFailed": "主题解析失败：“{name}”。",
      "validateFailed": "主题验证失败：“{name}”。",
      "engineNotMatch": "主题引擎版本不匹配：“{name}”。",
      "alreadyInstalled": "主题已安装：“{name}”。",
      "installFailed": "主题安装失败：“{name}”。",
      "installSuccess": "主题安装成功：“{name}”。",
      "notFound": "未找到主题：“{name}”。"
    },
    "uninstall": {
      "failed": "主题卸载失败：“{name}”。",
      "success": "主题卸载成功：“{name}”。",
      "inUse": "主题正在使用中，无法卸载：“{name}”。"
    },
    "info": {
      "count": "共 {count} 个样式",
      "id": "ID：{id}",
      "name": "名称：{name}",
      "description": "描述：{description}",
      "author": {
        "name": "作者：{name}",
        "url": "作者网址：{url}"
      },
      "version": "版本：{version}",
      "engine": "引擎版本：{engine}"
    },
    "unknown": "未知主题",
    "unnamed": "未命名主题"
  },
  "language": {
    "install": {
      "parseFailed": "语言包解析失败：“{name}”。",
      "validateFailed": "语言包验证失败：“{name}”。",
      "engineNotMatch": "语言包引擎版本不匹配：“{name}”。",
      "alreadyInstalled": "语言包已安装：“{name}”。",
      "installFailed": "语言包安装失败：“{name}”。",
      "installSuccess": "语言包安装成功：“{name}”。",
      "notFound": "未找到语言包：“{name}”。"
    },
    "uninstall": {
      "failed": "语言包卸载失败：“{name}”。",
      "success": "语言包卸载成功：“{name}”。",
      "inUse": "语言包正在使用中，无法卸载：“{name}”。"
    },
    "info": {
      "count": "共 {count} 个翻译",
      "id": "ID：{id}",
      "name": "名称：{name}",
      "language": "语言：{language}",
      "description": "描述：{description}",
      "author": {
        "name": "作者：{name}",
        "url": "作者网址：{url}"
      },
      "version": "版本：{version}",
      "engine": "引擎版本：{engine}"
    },
    "unknown": "未知语言包",
    "unnamed": "未命名语言包"
  },
  "extensionPack": {
    "install": {
      "parseFailed": "扩展包解析失败：“{name}”。",
      "invalidManifest": "扩展包清单无效：“{name}”。",
      "alreadyInstalled": "扩展包已安装：“{name}”。",
      "emptyExtension": "扩展包中没有扩展：“{name}”。"
    },
    "uninstall": {
      "failed": "扩展包卸载失败：“{name}”。",
      "success": "扩展包卸载成功：“{name}”。",
      "inUse": "扩展包正在使用中，无法卸载：“{name}”。"
    },
    "defaultName": "默认分类",
    "unnamed": "未命名分类",
    "unknown": "未知扩展包",
    "info": {
      "id": "ID：{id}",
      "name": "名称：{name}",
      "description": "描述：{description}",
      "author": {
        "name": "作者：{name}",
        "url": "作者网址：{url}"
      }
    }
  },
  "file": {
    "dragHere": "将文件拖拽到此处",
    "maxOpenCount": "最多只能打开 {count} 个文件",
    "onlySupport": "仅支持 {formats} 格式的文件",
    "notSupport": "不支持的文件格式：“{format}”。",
    "formatSeparator": "、",
    "unknown": "未知类型",
    "readFailed": "文件读取失败：“{name}”。"
  },
  "panel": {
    "unnamed": "未命名面板",
    "notifications": {
      "title": "通知"
    }
  },
  "tabsBar": {
    "unnamed": "未命名标签页",
    "more": {
      "tooltip": "更多"
    }
  },
  "errorPage": {
    "noView": "未提供视图",
    "unknownView": "未知视图"
  },
  "errorFallback": {
    "title": "抱歉，发生了一个错误",
    "reload": "重新加载"
  },
  "notification": {
    "template": "<%-{title}-%>{time} {source} {message}"
  },
  "toolbar": {
    "undo": "撤销",
    "redo": "重做",
    "clear": "清空",
    "copy": "复制",
    "clone": "克隆"
  },
  "statusbar": {
    "language": "选择语言",
    "lineColumn": "转到行/列",
    "narrowScreen": "宽屏模式",
    "lock": "锁定",
    "theme": "主题",
    "setting": "设置"
  },
  "settingsPage": {
    "item": {
      "error": "设置项无效"
    }
  },
  "progress": {
    "tooltip": "当前进度",
    "message": "处理中...",
    "aborting": "正在中止..."
  },
  "taskStatus": {
    "message": "正在处理 {number} 个任务",
    "empty": "当前无任务"
  },
  "menu": {
    "tabItem": {
      "close": "关闭",
      "closeOthers": "关闭其他",
      "closeAll": "关闭所有",
      "closeRight": "关闭右侧"
    },
    "editor": {
      "format": "格式化",
      "cut": "剪切",
      "copy": "复制",
      "paste": "粘贴",
      "clear": "清空"
    },
    "notifications": {
      "clear": "清除通知"
    },
    "extensionsCategories": {
      "item": {
        "copy": "复制信息",
        "copyId": "复制 ID",
        "uninstall": "卸载扩展包"
      }
    },
    "extensionsGroup": {
      "item": {
        "copy": "复制信息",
        "copyId": "复制 ID",
        "uninstall": "卸载扩展"
      },
      "groupItem": {
        "uninstallAll": "卸载组中所有扩展"
      }
    },
    "theme": {
      "item": {
        "info": "主题信息",
        "copy": "复制信息",
        "copyId": "复制 ID",
        "uninstall": "卸载主题"
      }
    },
    "language": {
      "item": {
        "info": "语言包信息",
        "copy": "复制信息",
        "copyId": "复制 ID",
        "uninstall": "卸载语言包"
      }
    }
  },
  "notifications": {
    "tooltip": "通知 (⌘J)"
  },
  "operationButton": {
    "run": {
      "tooltip": "运行 (⌃R)"
    },
    "option": {
      "tooltip": "选项"
    }
  },
  "extensionsGroup": {
    "empty": "组中没有扩展"
  },
  "extensionsCategories": {
    "info": {
      "count": "共 {count} 个扩展"
    }
  },
  "popover": {
    "theme": {
      "select": "切换主题"
    },
    "language": {
      "select": "切换语言"
    }
  },
  "settings": {
    "title": "偏好设置",
    "editor": {
      "title": "编辑器",
      "description": "自定义编辑器的外观和行为，包括字体、字号、缩进等选项。",
      "fontFamily": {
        "label": "字体",
        "description": "控制字体系列。"
      },
      "fontSize": {
        "label": "字号",
        "description": "控制字体大小(像素)。"
      },
      "tabSize": {
        "label": "缩进",
        "description": "一个制表符等于的空格数。"
      },
      "wordWrap": {
        "label": "自动换行",
        "description": "控制是否自动换行。"
      },
      "folding": {
        "label": "代码折叠",
        "description": "控制编辑器是否启用了代码折叠。"
      },
      "lineNumbers": {
        "label": "显示行号",
        "description": "控制是否显示行号。"
      },
      "matchBrackets": {
        "label": "括号匹配",
        "description": "突出显示匹配的括号。"
      },
      "renderLineHighlight": {
        "label": "突出显示当前行",
        "description": "控制是否突出显示当前行。"
      },
      "renderWhitespace": {
        "label": "显示空格",
        "description": "控制是否显示空白字符。"
      }
    },
    "appearance": {
      "title": "外观",
      "description": "更改应用程序和编辑器的配色方案。"
    },
    "language": {
      "title": "语言",
      "description": "更改应用程序的语言。"
    },
    "learning": {
      "title": "学习",
      "description": "AnyText 在构建时考虑到了可扩展性。从 UI 到编辑体验，几乎 AnyText 的每个部分都可以通过扩展包进行定制和增强。"
    },
    "about": {
      "title": "关于",
      "description": "AnyText 是一个免费的文本处理工具，基于 React 和 Monaco 编辑器构建。"
    }
  },
  "onlineResources": {
    "noPage": {
      "text": "在做了！在做了！（新建文件......）"
    }
  },
  "learning": {
    "development": {
      "documentation": "开发文档"
    }
  },
  "about": {
    "donation": "捐赠",
    "report": {
      "issue": "报告问题"
    },
    "version": "版本 {version} ({date})"
  },
  "donation": {
    "title": "向 AnyText 捐赠",
    "alipay": "支付宝",
    "wechat": "微信",
    "paypal": "PayPal"
  },
  "other": {
    "onlineResources": "在线资源",
    "copy": {
      "success": "已复制到剪贴板",
      "failed": "无法复制到剪贴板"
    }
  }
}
```
