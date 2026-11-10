import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react'

import type { ContactProps } from '@/components/Contact/types'
import { useContact } from '@/components/Contact/useContact'

import '@/components/Contact/Contact.css'

export function Contact({ localizedContent, onSuccess }: ContactProps) {
  const { copied, copy } = useContact(onSuccess)
  return (
    <section id="contact" className="contact">
      <span className="section-label">05 / {localizedContent.nav[4]}</span>
      <h2>
        {localizedContent.contactTitle}
        <ArrowUpRight aria-hidden="true" />
      </h2>
      <p>{localizedContent.contactText}</p>
      <div className="contact-links">
        <div className="contact-method">
          <a className="contact-link" href="mailto:digr98@gmail.com">
            <span className="contact-channel">
              <Mail size={16} aria-hidden="true" />
              Email
            </span>
            <span className="contact-address">
              digr98@gmail.com
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
          <button
            className="icon-button copy"
            data-haptic="manual"
            onClick={copy}
            aria-label={
              copied ? localizedContent.copied : localizedContent.copy
            }
            title={copied ? localizedContent.copied : localizedContent.copy}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
        <div className="contact-method">
          <a
            className="contact-link"
            href="https://t.me/no_sugar_daddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-channel">
              <Send size={16} aria-hidden="true" />
              Telegram
            </span>
            <span className="contact-address">
              @no_sugar_daddy
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
      <span className="copy-status" role="status">
        {copied ? localizedContent.copied : ''}
      </span>
    </section>
  )
}
