import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'
import flexSearchIndexOptions from 'flexsearch'
import Segment from 'segment'

const segment = new Segment()
segment.useDefault()

const options = {
  ...flexSearchIndexOptions,
  previewLength: 100,
  buttonLabel: '搜索',
  placeholder: '搜索文档',
  encode: (s: string) => segment.doSegment(s, {simple: true}),
  tokenize: 'forward' as const
}

export default defineConfig({
  plugins: [SearchPlugin(options)]
})
