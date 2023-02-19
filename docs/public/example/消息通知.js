export const activate = (ctx) => {
  return ctx.basic.CodeEditor()
}

export const run = (ctx) => {
  ctx.notification.send("\\f[f=alternate]正在运行", "success")
}

export const config = {
  name: "消息通知",
  id: "notification",
  version: "1.0.0",
  engine: "v0.0.1"
}
