import type { Lang, PortfolioContent } from '@/types'

export interface HeaderProps {
  localizedContent: PortfolioContent
  lang: Lang
  theme: string
  onLanguageChange: (lang: Lang) => void
  onThemeChange: () => void
}
