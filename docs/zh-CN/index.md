---
title: Docs with VitePress
editLink: true
layout: home

hero:
name: VuePress
text: Vite & Vue powered static site generator.
tagline: Lorem ipsum...
actions:

- theme: brand
  text: Get Started
  link: /guide/what-is-vitepress
- theme: alt
  text: View on GitHub
  link: https://github.com/vuejs/vitepress

features:

- icon: ⚡️
  title: Vite, The DX that can't be beat
  details: Lorem ipsum...
- icon: 🖖
  title: Power of Vue meets Markdown
  details: Lorem ipsum...
- icon: 🛠️
  title: Simple and minimal, always
  details: Lorem ipsum...

---

# Hello VitePress1

{{ $frontmatter.title }}

::: v-pre
`{{ This will be displayed as-is }}`
:::

### Title <Badge type="info" text="default" />

### Title <Badge type="tip" text="^1.9.0" />

### Title <Badge type="warning" text="beta" />

### Title <Badge type="danger" text="caution" />
