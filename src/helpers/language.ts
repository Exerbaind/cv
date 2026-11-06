import type { Lang } from '@/types'

export function languageFromSearch(search: string): Lang {
  return new URLSearchParams(search).get('lang') === 'ru' ? 'ru' : 'en'
}

export function urlWithLanguage(href: string, lang: Lang): string {
  const url = new URL(href)
  url.searchParams.set('lang', lang)
  return `${url.pathname}${url.search}${url.hash}`
}
