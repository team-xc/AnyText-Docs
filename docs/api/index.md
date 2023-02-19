# API 文档
本栏介绍的内容分为五个部分，分别是：
- Progress
- Options
- Notification
- Basic
- Hooks

这些 API 全部位于扩展生命周期的 `context` 对象上。

## 类型定义
```ts
interface ExtensionContext {
  // 进度处理
  progress: Progress
  // 配置选项
  options: Options
  // 消息通知
  notification: Notification
  // 基础组件
  basic: Basic
  // Hooks
  hooks: Hooks
}
```
