import { defineConfig } from 'vitepress'
import env from './env'

export default defineConfig({
  themeConfig: {
    logo: env.APP_ROOT_URL + '/assets/images/logo.png',
    outlineTitle: '目录',
    nav: [
      {text: '入门', link: '/manual/introduction', activeMatch: '^/manual/'},
      {text: '开发', link: '/guide/', activeMatch: '^/guide/'},
      {text: 'API', link: '/api/', activeMatch: '^/api/'},
      {text: '资源', link: '/resources/examples', activeMatch: '^/resources/'},
      {
        text: '更多',
        items: [
          {text: '常见问题', link: '/faq/', activeMatch: '^/faq/'},
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
            {text: '安装与卸载', link: '/manual/install'}
          ]
        },
        {
          text: '能力',
          items: [
            {text: '扩展插件', link: '/manual/interface'},
            {text: '色彩主题', link: '/manual/install'},
            {text: '语言翻译', link: '/manual/install'},
            {text: '扩展包', link: '/manual/install'}
          ]
        }
      ],
      '/guide/': [
        {text: '课前准备', link: '/guide/'},
        {
          text: '开发上手',
          items: [
            {text: '新建文件', link: '/guide/C'},
            {text: '引用资源', link: '/guide/C'},
            {text: '基础组件', link: '/guide/C'},
            {text: '安装预览', link: '/guide/C'}
          ]
        },
        {
          text: '进阶开发',
          items: [
            {text: '环境搭建', link: '/guide/C'},
            {text: '配置文件', link: '/guide/C'},
            {text: '打包脚本', link: '/guide/C'},
            {text: '自定义组件', link: '/guide/C'},
            {text: '使用 iFrame', link: '/guide/C'}
          ]
        },
        {
          text: '交互基础',
          items: [
            {text: '快速上手', link: '/guide/C'},
            {text: '生命周期', link: '/guide/C'},
            {text: '运行配置', link: '/guide/C'},
            {text: '进度处理', link: '/guide/C'},
            {text: '消息通知', link: '/guide/C'}
          ]
        },
        {
          text: '界面元素',
          items: [
            {text: '色彩主题', link: '/guide/C'},
            {text: '语言翻译', link: '/guide/C'},
            {text: '安装预览', link: '/guide/C'}
          ]
        },
        {
          text: '扩展包',
          items: [
            {text: '清单文件', link: '/guide/C'},
            {text: '打包分享', link: '/guide/C'}
          ]
        },
        {
          text: '参考',
          items: [
            {text: '主题颜色', link: '/guide/C'},
            {text: '翻译文本', link: '/guide/C'}
          ]
        }
      ],
      '/api/': [
        {text: '总揽', link: '/guide/'},
        {
          text: '上下文',
          items: [
            {text: '进度 (progress)', link: '/api/C'},
            {text: '选项 (options)', link: '/api/C'},
            {text: '通知 (notification)', link: '/api/C'}
          ]
        },
        {
          text: '基础组件',
          items: [
            {text: '代码编辑器 (CodeEditor)', link: '/api/C'},
            {text: '差异编辑器 (DiffEditor)', link: '/api/C'},
            {text: '代码编辑器和差异编辑器 (CodeEditorWithDiffEditor)', link: '/api/C'},
            {text: '双代码编辑器 (DualCodeEditor)', link: '/api/C'}
          ]
        },
        {
          text: 'HOOK',
          items: [
            {text: 'useClassName', link: '/api/C'},
            {text: 'useCopyToClipboard', link: '/api/C'},
            {text: 'useCopyToClipboardWithoutResult', link: '/api/C'},
            {text: 'useDebounce', link: '/api/C'},
            {text: 'useQuerySelector', link: '/api/C'},
            {text: 'useQuerySelectorAll', link: '/api/C'},
            {text: 'useQuerySelectorAll', link: '/api/C'},
            {text: 'useCreateElement', link: '/api/C'},
            {text: 'useCreateTextNode', link: '/api/C'},
            {text: 'useFunctionList', link: '/api/C'},
            {text: 'useIs', link: '/api/C'},
            {text: 'useIsFunction', link: '/api/C'},
            {text: 'useIsDef', link: '/api/C'},
            {text: 'useIsUnDef', link: '/api/C'},
            {text: 'useIsObject', link: '/api/C'},
            {text: 'useIsDate', link: '/api/C'},
            {text: 'useIsNumber', link: '/api/C'},
            {text: 'useIsAsyncFunction', link: '/api/C'},
            {text: 'useIsPromise', link: '/api/C'},
            {text: 'useIsString', link: '/api/C'},
            {text: 'useIsBoolean', link: '/api/C'},
            {text: 'useIsArray', link: '/api/C'},
            {text: 'useIsClient', link: '/api/C'},
            {text: 'useIsWindow', link: '/api/C'},
            {text: 'useIsElement', link: '/api/C'},
            {text: 'useIsImageDom', link: '/api/C'},
            {text: 'useIsNull', link: '/api/C'},
            {text: 'useIsNullAndUnDef', link: '/api/C'},
            {text: 'useIsNullOrUnDef', link: '/api/C'},
            {text: 'useKeyboardEvent', link: '/api/C'},
            {text: 'useMenu', link: '/api/C'},
            {text: 'useMenuEvent', link: '/api/C'},
            {text: 'useCreateMenu', link: '/api/C'},
            {text: 'useDestroyMenu', link: '/api/C'},
            {text: 'useModal', link: '/api/C'},
            {text: 'useOpenModal', link: '/api/C'},
            {text: 'useCloseModal', link: '/api/C'},
            {text: 'useSetModalProps', link: '/api/C'},
            {text: 'useOnCloseModal', link: '/api/C'},
            {text: 'useOnOpenModal', link: '/api/C'},
            {text: 'useOnDestroyModal', link: '/api/C'},
            {text: 'useOnModalEvent', link: '/api/C'},
            {text: 'useModalReceiveProps', link: '/api/C'},
            {text: 'useCreateModal', link: '/api/C'},
            {text: 'useDestroyModal', link: '/api/C'},
            {text: 'useResizeListener', link: '/api/C'},
            {text: 'useRTF', link: '/api/C'},
            {text: 'useRTFText', link: '/api/C'},
            {text: 'useScrollTo', link: '/api/C'},
            {text: 'useScrollIntoView', link: '/api/C'},
            {text: 'useScroll', link: '/api/C'},
            {text: 'useSetState', link: '/api/C'},
            {text: 'useTimeout', link: '/api/C'},
            {text: 'useToast', link: '/api/C'},
            {text: 'useUUID', link: '/api/C'},
            {text: 'useWheelHorizontal', link: '/api/C'},
            {text: 'useMD5', link: '/api/C'},
            {text: 'useReloadPage', link: '/api/C'},
            {text: 'useOpenUrl', link: '/api/C'}
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
            {text: '为什么？', link: '/faq/index'},
            {text: '为什么？', link: '/faq/C'},
            {text: '为什么？', link: '/faq/C'}
          ]
        }
      ],
      '/about/': [
        {text: '关于我', link: '/about/index'},
        {
          text: '更新与迁移',
          items: [
            {text: 'v0.0.1 版本介绍', link: '/faq/index'}
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
      indexName: 'index',
      locales: {
        zh: {
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
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
})