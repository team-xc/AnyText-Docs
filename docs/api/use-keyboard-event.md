# useKeyboardEvent
监听键盘按键，支持组合键。

## 参数
```ts
type KeyboardKeys = string | string[]
type EventType = ('keydown' | 'keyup')[]

type KeyboardEventProps = (keys: KeyboardKeys, handle: (event: KeyboardEvent) => void, options?: {
  target?: BasicTarget<HTMLElement | Document | Window>,
  type?: EventType,
  preventDefault?: boolean,
  closeMenu?: boolean
}) => void

function useKeyboardEvent: KeyboardEventProps
```

## 用法
```ts
useKeyboardEvent('meta.a', () => {
  console.log('meta + a')
})
```
