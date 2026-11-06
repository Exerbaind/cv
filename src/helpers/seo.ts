import { content } from '../mock/content'
import type { Lang } from '../types'

export const languagePath = (lang: Lang) => (lang === 'ru' ? '/ru/' : '/')

export function siteOrigin(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined
  const url = new URL(value)
  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      'VITE_SITE_URL must be an HTTPS origin, e.g. https://your-domain.me'
    )
  }
  return url.origin
}

export function seoData(lang: Lang, origin?: string) {
  const person = content[lang]
  const title = `${person.name} — ${person.role}`
  const description =
    lang === 'ru'
      ? 'Дмитрий Шамаль — Senior Frontend Developer. Более 7 лет опыта: React, TypeScript, веб-приложения и Telegram Mini Apps. Опыт работы, проекты и контакты.'
      : 'Dmitry Shamal — Senior Frontend Developer with 7+ years of experience in React, TypeScript, web applications and Telegram Mini Apps. Experience, projects and contact details.'
  const url = origin ? `${origin}${languagePath(lang)}` : undefined
  return {
    title,
    description,
    url,
    profile: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      ...(url && { url, '@id': `${url}#profile` }),
      name: title,
      inLanguage: lang,
      mainEntity: {
        '@type': 'Person',
        ...(origin && { '@id': `${origin}/#person` }),
        name: person.name,
        alternateName: lang === 'ru' ? content.en.name : content.ru.name,
        jobTitle: person.role,
        ...(origin && { url: `${origin}/` }),
        sameAs: ['https://t.me/no_sugar_daddy'],
        knowsAbout: [
          'React',
          'TypeScript',
          'Frontend development',
          'Telegram Mini Apps',
        ],
      },
    },
  }
}

export function updateSeo(lang: Lang) {
  const origin = siteOrigin(import.meta.env.VITE_SITE_URL)
  const data = seoData(lang, origin)
  document.documentElement.lang = lang
  document.title = data.title
  const meta = (key: string, value: string, property = false) => {
    const attribute = property ? 'property' : 'name'
    let element = document.head.querySelector<HTMLMetaElement>(
      `meta[${attribute}="${key}"]`
    )
    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, key)
      document.head.appendChild(element)
    }
    element.content = value
  }
  meta('description', data.description)
  meta('og:title', data.title, true)
  meta('og:description', data.description, true)
  meta('og:locale', lang === 'ru' ? 'ru_RU' : 'en_US', true)
  meta('twitter:title', data.title)
  meta('twitter:description', data.description)
  if (data.url) {
    meta('og:url', data.url, true)
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute('href', data.url)
  }
  let schema = document.getElementById('profile-schema')
  if (!schema) {
    schema = document.createElement('script')
    schema.id = 'profile-schema'
    schema.setAttribute('type', 'application/ld+json')
    document.head.appendChild(schema)
  }
  schema.textContent = JSON.stringify(data.profile).replace(/</g, '\\u003c')
}
