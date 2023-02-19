let codeEditor

export const activate = ({ basic: { CodeEditor } }) => {
  return CodeEditor({ onRef: ref => codeEditor = ref })
}

export const run = ({ notification: { send } }) => {
  send(`字符数：${codeEditor.getValue().length}`)
}

export const config = {
  name: "字符统计",
  id: "character-count",
  version: "1.0.0",
  engine: "v0.0.1"
}
