import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

import '@/styles/global.css'

import { languageFromSearch, urlWithLanguage } from '@/helpers/language'
import { HomePage } from '@/pages/HomePage'

const lang = languageFromSearch(location.search, location.pathname)
if (new URLSearchParams(location.search).has('lang')) {
  history.replaceState(history.state, '', urlWithLanguage(location.href, lang))
}
const root = document.getElementById('root')!
const page = (
  <React.StrictMode>
    <HomePage initialLang={lang} />
  </React.StrictMode>
)
if (root.hasChildNodes() && root.dataset.language === lang) {
  hydrateRoot(root, page)
} else {
  createRoot(root).render(page)
}
