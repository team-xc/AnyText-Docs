# 差异编辑器 (DiffEditor)

## 参数
```ts
interface DiffEditorProps {
  originalValue?: string,
  modifiedValue?: string,
  originalLanguage?: string,
  modifiedLanguage?: string,
  readOnly?: boolean,
  originalEditable?: boolean,
  onRef?: (ref: {
    original: EditorRefs,
    modified: EditorRefs,
  } & DiffEditorRefs) => void,
}

interface DiffEditorRefs {
  onUpdateDiff: (listener: () => void) => void,
  getDiffLineInformationForModified: (lineNumber: number) => {
    equivalentLineNumber: number
  } | null,
  getDiffLineInformationForOriginal: (lineNumber: number) => {
    equivalentLineNumber: number
  } | null,
  getLineChanges: () => {
    charChanges: {
      originalStartColumn: number,
      originalEndColumn: number,
      modifiedStartColumn: number,
      modifiedEndColumn: number,
    }[] | undefined,
  }[] | null,
}
```
关于 `EditorRefs` 的详细信息，请参阅 [代码编辑器 (CodeEditor)](code-editor)。
