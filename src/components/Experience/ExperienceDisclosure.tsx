import { useId, useState } from 'react'

import type { ExperienceDisclosureProps } from '@/components/Experience/types'

export function ExperienceDisclosure({
  label,
  initiallyOpen = false,
  children,
}: ExperienceDisclosureProps) {
  const [expanded, setExpanded] = useState(initiallyOpen)
  const contentId = useId()

  return (
    <div className="job-disclosure">
      <button
        className="job-toggle"
        type="button"
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={() => setExpanded((value) => !value)}
      >
        <span>{label}</span>
        <span className="job-toggle-icon" aria-hidden="true" />
      </button>
      <div
        className="job-disclosure-content"
        id={contentId}
        data-expanded={expanded}
        aria-hidden={!expanded}
        inert={!expanded}
      >
        <div className="job-disclosure-inner">{children}</div>
      </div>
    </div>
  )
}
