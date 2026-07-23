<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { loadSiteCompliance } from '../modules/siteCompliance'

const footerRef = ref<HTMLElement | null>(null)
const companyRef = ref<HTMLSpanElement | null>(null)
const icpRef = ref<HTMLAnchorElement | null>(null)
const policeSeparatorRef = ref<HTMLSpanElement | null>(null)
const policeRef = ref<HTMLAnchorElement | null>(null)
let abortController: AbortController | undefined

onMounted(() => {
  abortController = new AbortController()

  loadSiteCompliance(window.location.hostname, abortController.signal).then(config => {
    if (abortController?.signal.aborted) return

    const footer = footerRef.value
    const company = companyRef.value
    const icp = icpRef.value
    const policeSeparator = policeSeparatorRef.value
    const police = policeRef.value

    if (!footer || !company || !icp || !policeSeparator || !police) {
      throw new Error('Site compliance footer elements are unavailable')
    }

    company.textContent = `Copyright © 2022-present ${config.companyName}`
    icp.textContent = config.icp.text
    icp.href = config.icp.url

    if (config.police) {
      police.textContent = config.police.text
      police.href = config.police.url
      policeSeparator.hidden = false
      police.hidden = false
    }

    footer.hidden = false
  }).catch(error => {
    if (!abortController?.signal.aborted) {
      console.error('Failed to load site compliance config', error)
    }
  })
})

onUnmounted(() => abortController?.abort())
</script>

<template>
  <footer ref="footerRef" class="site-compliance-footer" hidden>
    <div class="site-compliance-footer__container">
      <p class="site-compliance-footer__message">Released under the MIT License.</p>
      <p class="site-compliance-footer__copyright">
        <span ref="companyRef" />
        <span>&nbsp;·&nbsp;</span>
        <a ref="icpRef" target="_blank" rel="noopener noreferrer" />
        <span ref="policeSeparatorRef" hidden>&nbsp;·&nbsp;</span>
        <a ref="policeRef" target="_blank" rel="noopener noreferrer" hidden />
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-compliance-footer[hidden],
.site-compliance-footer [hidden] {
  display: none;
}

.site-compliance-footer {
  position: relative;
  z-index: var(--vp-z-index-footer);
  border-top: 1px solid var(--vp-c-gutter);
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

:global(.VPContent.has-sidebar ~ .site-compliance-footer) {
  display: none;
}

.site-compliance-footer__container {
  margin: 0 auto;
  max-width: var(--vp-layout-max-width);
  text-align: center;
}

.site-compliance-footer__message,
.site-compliance-footer__copyright {
  margin: 0;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  overflow-wrap: anywhere;
}

.site-compliance-footer a {
  color: var(--vp-c-brand);
}

.site-compliance-footer a:hover {
  color: var(--vp-c-brand-dark);
}

@media (min-width: 768px) {
  .site-compliance-footer {
    padding: 32px;
  }
}
</style>
