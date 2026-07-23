import { h } from 'vue'
import Theme from 'vitepress/theme'
import ComplianceFooter from './ComplianceFooter.vue'
import './styles/index.css'
import './styles/variable.css'

export default {
  ...Theme,
  Layout: () => h(Theme.Layout, null, {
    'layout-bottom': () => h(ComplianceFooter)
  })
}