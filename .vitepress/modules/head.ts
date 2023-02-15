import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#5546a3'}]
  ]
})