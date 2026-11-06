import type { Lang } from '@/types'

export function assetPath(
  path: string,
  base = import.meta.env?.BASE_URL ?? '/'
) {
  return `${base}${path.replace(/^\//, '')}`
}

export function languagePath(
  lang: Lang,
  base = import.meta.env?.BASE_URL ?? '/'
) {
  return `${base}?lang=${lang}`
}
