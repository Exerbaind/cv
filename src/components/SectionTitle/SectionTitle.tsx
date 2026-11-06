import type { SectionTitleProps } from '@/components/SectionTitle/types'

import '@/components/SectionTitle/SectionTitle.css'

export function SectionTitle({ n, label, title, note }: SectionTitleProps) {
  return (
    <div className="section-heading">
      <span className="section-label">
        {n} / {label}
      </span>
      <h2>{title}</h2>
      {note && <p>{note}</p>}
    </div>
  )
}
