export const activate = (ctx) => {
  return ctx.basic.CodeEditor()
}

let timer = null

export const run = (ctx) => {
  clearInterval(timer)
  ctx.progress.reset()
  
  timer = setInterval(() => {
    ctx.progress.add(1)
  }, 100)
}

export const config = {
  name: "进度处理",
  id: "progress",
  version: "1.0.0",
  engine: "v0.0.1"
}
