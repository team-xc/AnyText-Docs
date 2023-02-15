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
      {text: '资源', link: '/resources/', activeMatch: '^/resources/'},
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
            {text: '扩展安装', link: '/manual/install'}
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
            {text: '基础组件', link: '/guide/C'}
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
          text: '处理进度',
          items: [
            {text: 'B', link: '/api/C'}
          ]
        }
      ],
      '/resources/': [
        {
          text: 'A',
          items: [
            {text: 'B', link: '/resources/C'}
          ]
        }
      ],
      '/faq/': [
        {
          text: 'A',
          items: [
            {text: 'B', link: '/faq/C'}
          ]
        }
      ],
      '/about/': [
        {
          text: 'A',
          items: [
            {text: 'B', link: '/about/C'}
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