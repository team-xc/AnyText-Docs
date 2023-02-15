import { defineConfigWithTheme } from 'vitepress'
import theme from './modules/theme'
import head from './modules/head'

export default defineConfigWithTheme({
  lang: 'zh-CN',
  title: 'AnyText',
  description: 'This is a super powerful text processing tool.',
  appearance: 'dark',
  base: '/v0.0.1/docs/',
  outDir: 'dist',
  cacheDir: '.vitepress/.cache',
  srcDir: 'docs',
  ...head,
  ...theme
})