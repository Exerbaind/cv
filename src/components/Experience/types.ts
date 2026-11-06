import type { ReactNode } from 'react'

import type { PortfolioContent } from '@/types'

export interface ExperienceProps {
  localizedContent: PortfolioContent
}

export interface ExperienceDisclosureProps {
  label: string
  initiallyOpen?: boolean
  children: ReactNode
}
