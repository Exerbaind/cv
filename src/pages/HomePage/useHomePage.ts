import { useEffect, useState } from 'react'

import { readStorage } from '@/helpers'
import { languageFromSearch, urlWithLanguage } from '@/helpers/language'
import { useInteractions } from '@/hooks/useInteractions'
import { content } from '@/mock'
import type { Lang } from '@/types'

export function useHomePage() {
  const { changeLanguage, prepareThemeChange, success } = useInteractions()
  const [lang, setLang] = useState<Lang>(() =>
    languageFromSearch(window.location.search)
  )
  const [theme, setTheme] = useState(
    readStorage(
      'theme',
      typeof matchMedia !== 'undefined' &&
        matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  )
  const [privacy, setPrivacy] = useState(false)
  const localizedContent = content[lang]
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])
  useEffect(() => {
    const onPopState = () => {
      void changeLanguage(
        languageFromSearch(window.location.search),
        lang,
        setLang
      )
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [changeLanguage, lang])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#171915' : '#f7f7f2')
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])
  useEffect(() => {
    const id = import.meta.env.VITE_UMAMI_WEBSITE_ID,
      src = import.meta.env.VITE_UMAMI_SCRIPT_URL
    if (!id || !src || navigator.doNotTrack === '1') return
    try {
      if (new URL(src).protocol !== 'https:') return
    } catch {
      return
    }
    const s = document.createElement('script')
    s.src = src
    s.defer = true
    s.dataset.websiteId = id
    document.head.appendChild(s)
    return () => s.remove()
  }, [])

  return {
    localizedContent,
    lang,
    theme,
    privacy,
    success,
    openPrivacy: () => setPrivacy(true),
    closePrivacy: () => setPrivacy(false),
    changeLanguage: (next: Lang) => {
      void changeLanguage(next, lang, (value) => {
        window.history.replaceState(
          window.history.state,
          '',
          urlWithLanguage(window.location.href, value)
        )
        setLang(value)
      })
    },
    toggleTheme: () => {
      prepareThemeChange()
      setTheme(theme === 'light' ? 'dark' : 'light')
    },
  }
}
