# useToast
使用提示。

## 参数
```ts
enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  LOADING = 'loading',
  DEFAULT = 'default'
}

type ToastOptions = {
  id?: ToastId,
  duration?: number,
  icon?: string
}

type ToastId = string | undefined

function useToast(message: string, type?: ToastType, options?: ToastOptions): {
  dismiss: () => void,
  update: (message: string, type: ToastType) => void
}
```
