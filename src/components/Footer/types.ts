import type { Lang, PortfolioContent } from '@/types'

export interface FooterProps {
  localizedContent: PortfolioContent
  lang: Lang
  onPrivacyOpen: () => void
}

export interface InstallPrompt extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: string }>
}
