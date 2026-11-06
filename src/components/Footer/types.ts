import type { Lang, PortfolioContent } from '@/types'

export interface FooterProps {
  localizedContent: PortfolioContent
  lang: Lang
  onPrivacyOpen: () => void
}
