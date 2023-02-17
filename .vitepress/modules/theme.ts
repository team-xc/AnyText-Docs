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
            {text: '语言翻译', link: '/guide/translation'},
            {text: '安装预览', link: '/guide/preview'}
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
            {text: 'useQuerySelector', link: '/api/use-query-selector'},
            {text: 'useQuerySelectorAll', link: '/api/use-query-selector-all'},
            {text: 'useCreateElement', link: '/api/use-create-element'},
            {text: 'useCreateTextNode', link: '/api/use-create-text-node'},
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
            {text: 'useMenu', link: '/api/use-menu'},
            {text: 'useMenuEvent', link: '/api/use-menu-event'},
            {text: 'useCreateMenu', link: '/api/use-create-menu'},
            {text: 'useDestroyMenu', link: '/api/use-destroy-menu'},
            {text: 'useModal', link: '/api/use-modal'},
            {text: 'useOpenModal', link: '/api/use-open-modal'},
            {text: 'useCloseModal', link: '/api/use-close-modal'},
            {text: 'useSetModalProps', link: '/api/use-set-modal-props'},
            {text: 'useOnCloseModal', link: '/api/use-on-close-modal'},
            {text: 'useOnOpenModal', link: '/api/use-on-open-modal'},
            {text: 'useOnDestroyModal', link: '/api/use-on-destroy-modal'},
            {text: 'useOnModalEvent', link: '/api/use-on-modal-event'},
            {text: 'useModalReceiveProps', link: '/api/use-modal-receive-props'},
            {text: 'useCreateModal', link: '/api/use-create-modal'},
            {text: 'useDestroyModal', link: '/api/use-destroy-modal'},
            {text: 'useResizeListener', link: '/api/use-resize-listener'},
            {text: 'useRTF', link: '/api/use-rtf'},
            {text: 'useRTFText', link: '/api/use-rtf-text'},
            {text: 'useScrollTo', link: '/api/use-scroll-to'},
            {text: 'useScrollIntoView', link: '/api/use-scroll-into-view'},
            {text: 'useScroll', link: '/api/use-scroll'},
            {text: 'useSetState', link: '/api/use-set-state'},
            {text: 'useTimeout', link: '/api/use-timeout'},
            {text: 'useToast', link: '/api/use-toast'},
            {text: 'useUUID', link: '/api/use-uuid'},
            {text: 'useWheelHorizontal', link: '/api/use-wheel-horizontal'},
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
      copyright: 'Copyright © 2022-present Alone'
    },
    algolia: {
      appId: '6K16KO6KE0',
      apiKey: 'ec8784147cdb816b15c466fba0a145ca',
      indexName: 'AnyText',
      placeholder: '搜索文档',
      translations: {
        button: {
          buttonText: '搜索文档',
          buttonAriaLabel: '搜索文档'
        },
        modal: {
          searchBox: {
            resetButtonTitle: '清除查询条件',
            resetButtonAriaLabel: '清除查询条件',
            cancelButtonText: '取消',
            cancelButtonAriaLabel: '取消'
          },
          startScreen: {
            recentSearchesTitle: '搜索历史',
            noRecentSearchesText: '没有搜索历史',
            saveRecentSearchButtonTitle: '保存至搜索历史',
            removeRecentSearchButtonTitle: '从搜索历史中移除',
            favoriteSearchesTitle: '收藏',
            removeFavoriteSearchButtonTitle: '从收藏中移除'
          },
          errorScreen: {
            titleText: '无法获取结果',
            helpText: '你可能需要检查你的网络连接'
          },
          footer: {
            selectText: '选择',
            navigateText: '切换',
            closeText: '关闭',
            searchByText: '搜索提供者'
          },
          noResultsScreen: {
            noResultsText: '无法找到相关结果',
            suggestedQueryText: '你可以尝试查询',
            reportMissingResultsText: '你认为该查询应该有结果？',
            reportMissingResultsLinkText: '点击反馈'
          }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/xc912/AnyText-Docs/edit/master/docs/:path',
      text: '编辑此页面'
    }
  }
})