import { SectionTitle } from '@/components/SectionTitle'
import type { StackProps } from '@/components/Stack/types'
import { stack } from '@/mock'

import '@/components/Stack/Stack.css'

export function Stack({ localizedContent }: StackProps) {
  return (
    <section id="stack">
      <SectionTitle
        n="04"
        label={localizedContent.nav[3]}
        title={localizedContent.stackTitle}
        note={localizedContent.stackNote}
      />
      <div className="stack-grid">
        {stack.map((items, i) => (
          <div className="stack-group" key={i}>
            <h3>
              <span>0{i + 1}</span>
              {localizedContent.groups[i]}
            </h3>
            <div className="stack-tags">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="education">
        <span className="small-mono">{localizedContent.education}</span>
        <div>
          <h3>{localizedContent.university}</h3>
          <p>{localizedContent.degree}</p>
          <p className="education-languages">{localizedContent.languages}</p>
        </div>
        <span className="small-mono">2015 — 2019</span>
      </div>
    </section>
  )
}
