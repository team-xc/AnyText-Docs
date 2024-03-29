import { defineConfig } from 'vitepress'
import env from './env'

export default defineConfig({
  themeConfig: {
    logo: env.APP_ROOT_URL + '/assets/images/logo.png',
    outlineTitle: '目录',
    outline: 'deep',
    nav: [
      {text: '入门', link: '/manual/introduction', activeMatch: '^/manual/'},
      {text: '开发', link: '/guide/', activeMatch: '^/guide/'},
      {text: 'API', link: '/api/', activeMatch: '^/api/'},
      {text: '资源', link: '/resources/examples', activeMatch: '^/resources/'},
      {
        text: '更多',
        items: [
          {text: '常见问题', link: '/faq/installation-failed', activeMatch: '^/faq/'},
          {text: '关于', link: '/about/', activeMatch: '^/about/'}
        ]
      }
    ],
    socialLinks: [
      {icon: 'discord', link: 'https://discord.gg/5yVkhpnmmn'}
    ],
    sidebar: {
      '/manual/': [
        {
          text: '开始',
          items: [
            {text: '简介', link: '/manual/introduction'},
            {text: '快速上手', link: '/manual/quick-start'}
          ]
        },
        {
          text: '基本',
          items: [
            {text: '认识界面', link: '/manual/interface'},
            {text: '安装与卸载', link: '/manual/install-and-uninstall'}
          ]
        },
        {
          text: '能力',
          items: [
            {text: '扩展插件', link: '/manual/capabilities-expansion'},
            {text: '色彩主题', link: '/manual/capabilities-theme'},
            {text: '语言翻译', link: '/manual/capabilities-translation'},
            {text: '扩展包', link: '/manual/capabilities-expansion-pack'}
          ]
        }
      ],
      '/guide/': [
        {text: '课前准备', link: '/guide/'},
        {
          text: '开发上手',
          items: [
            {text: '基本配置', link: '/guide/basic-config'},
            {text: '资源引用', link: '/guide/resources-refs'},
            {text: '生命周期', link: '/guide/lifecycle'},
            {text: '基础组件', link: '/guide/basic-components'}
          ]
        },
        {
          text: '进阶开发',
          items: [
            {text: '环境搭建', link: '/guide/setup'},
            {text: '配置文件', link: '/guide/config'},
            {text: '打包脚本', link: '/guide/script'},
            {text: '自定义组件', link: '/guide/custom-component'}
          ]
        },
        {
          text: '交互基础',
          items: [
            {text: '快速上手', link: '/guide/examples'},
            {text: '运行配置', link: '/guide/options'},
            {text: '进度处理', link: '/guide/progress'},
            {text: '消息通知', link: '/guide/notification'}
          ]
        },
        {
          text: '界面元素',
          items: [
            {text: '色彩主题', link: '/guide/theme'},
            {text: '语言翻译', link: '/guide/translation'}
          ]
        },
        {
          text: '扩展包',
          items: [
            {text: '清单文件', link: '/guide/manifest'},
            {text: '打包分享', link: '/guide/create-an-expansion-package'}
          ]
        },
        {
          text: '参考',
          items: [
            {text: '主题颜色', link: '/guide/color-theme'},
            {text: '文本翻译', link: '/guide/text-translation'}
          ]
        }
      ],
      '/api/': [
        {text: '总揽', link: '/api/'},
        {
          text: '上下文',
          items: [
            {text: '进度 (Progress)', link: '/api/progress'},
            {text: '选项 (Options)', link: '/api/options'},
            {text: '通知 (Notification)', link: '/api/notification'}
          ]
        },
        {
          text: '基础组件',
          items: [
            {text: '代码编辑器 (CodeEditor)', link: '/api/code-editor'},
            {text: '差异编辑器 (DiffEditor)', link: '/api/diff-editor'},
            {text: '代码编辑器和差异编辑器 (CodeEditorWithDiffEditor)', link: '/api/code-editor-with-diff-editor'},
            {text: '双代码编辑器 (DualCodeEditor)', link: '/api/dual-code-editor'}
          ]
        },
        {
          text: 'HOOK',
          items: [
            {text: 'useClassName', link: '/api/use-class-name'},
            {text: 'useCopyToClipboard', link: '/api/use-copy-to-clipboard'},
            {text: 'useCopyToClipboardWithoutResult', link: '/api/use-copy-to-clipboard-without-result'},
            {text: 'useDebounce', link: '/api/use-debounce'},
            {text: 'useFunctionList', link: '/api/use-function-list'},
            {text: 'useIs', link: '/api/use-is'},
            {text: 'useIsFunction', link: '/api/use-is-function'},
            {text: 'useIsDef', link: '/api/use-is-def'},
            {text: 'useIsUnDef', link: '/api/use-is-un-def'},
            {text: 'useIsObject', link: '/api/use-is-object'},
            {text: 'useIsDate', link: '/api/use-is-date'},
            {text: 'useIsNumber', link: '/api/use-is-number'},
            {text: 'useIsAsyncFunction', link: '/api/use-is-async-function'},
            {text: 'useIsPromise', link: '/api/use-is-promise'},
            {text: 'useIsString', link: '/api/use-is-string'},
            {text: 'useIsBoolean', link: '/api/use-is-boolean'},
            {text: 'useIsArray', link: '/api/use-is-array'},
            {text: 'useIsClient', link: '/api/use-is-client'},
            {text: 'useIsWindow', link: '/api/use-is-window'},
            {text: 'useIsElement', link: '/api/use-is-element'},
            {text: 'useIsImageDom', link: '/api/use-is-image-dom'},
            {text: 'useIsNull', link: '/api/use-is-null'},
            {text: 'useIsNullAndUnDef', link: '/api/use-is-null-and-un-def'},
            {text: 'useIsNullOrUnDef', link: '/api/use-is-null-or-un-def'},
            {text: 'useKeyboardEvent', link: '/api/use-keyboard-event'},
            {text: 'useResizeListener', link: '/api/use-resize-listener'},
            {text: 'useRTF', link: '/api/use-rtf'},
            {text: 'useRTFText', link: '/api/use-rtf-text'},
            {text: 'useTimeout', link: '/api/use-timeout'},
            {text: 'useToast', link: '/api/use-toast'},
            {text: 'useUUID', link: '/api/use-uuid'},
            {text: 'useMD5', link: '/api/use-md5'},
            {text: 'useReloadPage', link: '/api/use-reload-page'},
            {text: 'useOpenUrl', link: '/api/use-open-url'}
          ]
        }
      ],
      '/resources/': [
        {
          text: '社区',
          items: [
            {text: '参与讨论', link: '/resources/contact'},
            {text: '示例项目', link: '/resources/examples'}
          ]
        }
      ],
      '/faq/': [
        {
          text: '常见问题',
          items: [
            {text: '为什么安装提示失败？', link: '/faq/installation-failed'},
            {text: '我该如何调试扩展？', link: '/faq/debug-extension'},
            {text: '是否支持单元测试？', link: '/faq/unit-testing'},
            {text: '如何使用 TS？', link: '/faq/use-typescript'}
          ]
        }
      ],
      '/about/': [
        {text: '关于我', link: '/about/'},
        {
          text: '更新与迁移',
          items: [
            {text: 'v0.0.1 版本介绍', link: '/about/beta-v0.0.1'}
          ]
        }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present 佛山市南海区天宏陵阳科技工程部'
    },
    editLink: {
      pattern: 'https://github.com/xc912/AnyText-Docs/edit/master/docs/:path',
      text: '编辑此页面'
    }
  }
})