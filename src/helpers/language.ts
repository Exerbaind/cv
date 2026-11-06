import type { Lang } from '@/types'

export function languageFromSearch(search: string, pathname = '/'): Lang {
  const explicit = new URLSearchParams(search).get('lang')
  if (explicit === 'ru' || explicit === 'en') return explicit
  return /^\/ru(?:\/|$)/.test(pathname) ? 'ru' : 'en'
}

export function urlWithLanguage(href: string, lang: Lang): string {
  const url = new URL(href)
  url.pathname = lang === 'ru' ? '/ru/' : '/'
  url.searchParams.delete('lang')
  return `${url.pathname}${url.search}${url.hash}`
}
