export const options = [
  {
    key: "setting.uppercaseMode",
    label: "大写模式",
    defaultValue: false,
    description: "是否将所有输出转换为大写",
    type: "boolean"
  }
]

export const mounted = (ctx) => {
  ctx.options.onChange("setting.uppercaseMode", false, (value) => {
    ctx.hooks.useToast(value ? "大写模式已开启" : "大写模式已关闭", "success")
  })
}

export const activate = (ctx) => {
  return ctx.basic.CodeEditor()
}

export const config = {
  name: "配置选项",
  id: "config",
  version: "1.0.0",
  engine: "v0.0.1"
}
