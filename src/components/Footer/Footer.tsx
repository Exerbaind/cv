import { Printer } from 'lucide-react'

import type { FooterProps } from '@/components/Footer/types'

import '@/components/Footer/Footer.css'

export function Footer({ localizedContent, lang, onPrivacyOpen }: FooterProps) {
  return (
    <footer>
      <div>
        <button onClick={() => window.print()}>
          <Printer size={13} />
          {lang === 'en' ? 'Print / save PDF' : 'Печать / сохранить PDF'}
        </button>
        <button onClick={onPrivacyOpen}>{localizedContent.privacy}</button>
      </div>
    </footer>
  )
}
