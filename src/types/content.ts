import type { content } from '@/mock/content'

export type Lang = 'en' | 'ru'
export type PortfolioContent = (typeof content)[Lang]
