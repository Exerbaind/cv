import type { PortfolioContent } from '@/types'

export interface PrivacyDialogProps {
  localizedContent: PortfolioContent
  open: boolean
  onClose: () => void
}
