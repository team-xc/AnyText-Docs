import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Hello World',
    outlineTitle: 'In hac pagina',
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
    nav: [
      {text: 'Guide', link: '/guide'},
      {
        text: 'Dropdown Menu',
        items: [
          {text: 'Item A', link: '/item-1'},
          {text: 'Item B', link: '/item-2'},
          {text: 'Item C', link: '/item-3'}
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          {text: 'Introduction', link: '/introduction'},
          {text: 'Getting Started', link: '/getting-started'}
        ]
      }
    ],
    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'},
      {icon: 'twitter', link: '...'},
      // 你也可以自定义svg的icon:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
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