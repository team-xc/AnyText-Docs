import { defineConfig } from 'vitepress'
import env from './env'

export default defineConfig({
  head: [
    ['link', {rel: 'icon', href: env.APP_ROOT_URL + '/assets/images/favicon.ico'}],
    ['meta', {name: 'keywords', content: 'anytext, text, processing, tool'}],
    ['meta', {name: 'author', content: 'Lxc'}]
  ]
})