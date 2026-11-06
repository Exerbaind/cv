import { Printer } from 'lucide-react'

import type { FooterProps } from '@/components/Footer/types'
import { useFooter } from '@/components/Footer/useFooter'

import '@/components/Footer/Footer.css'

export function Footer({ localizedContent, lang, onPrivacyOpen }: FooterProps) {
  const { install, requestInstall, print } = useFooter()
  return (
    <footer>
      <div>
        <button onClick={print}>
          <Printer size={13} />
          {lang === 'en' ? 'Print / save PDF' : 'Печать / сохранить PDF'}
        </button>
        <button onClick={onPrivacyOpen}>{localizedContent.privacy}</button>
        {install && (
          <button onClick={requestInstall}>{localizedContent.install}</button>
        )}
      </div>
    </footer>
  )
}
