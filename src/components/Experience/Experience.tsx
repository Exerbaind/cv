import { ExperienceDisclosure } from '@/components/Experience/ExperienceDisclosure'
import type { ExperienceProps } from '@/components/Experience/types'
import { SectionTitle } from '@/components/SectionTitle'

import '@/components/Experience/Experience.css'

export function Experience({ localizedContent }: ExperienceProps) {
  return (
    <section id="experience">
      <SectionTitle
        n="01"
        label={localizedContent.nav[0]}
        title={localizedContent.exp}
        note={localizedContent.expNote}
      />
      <div className="jobs">
        {localizedContent.jobs.map((job, i) => (
          <article
            className={`job ${i === 0 ? 'current' : ''}`}
            key={job.company}
          >
            <div className="job-meta">
              <div className="job-top">
                <span className="company-mark">
                  {['O', 'or.', 'П', 'G'][i]}
                </span>
                <div>
                  <h3>
                    {job.company}
                    {job.tag && <span className="badge">{job.tag}</span>}
                  </h3>
                  <p>{job.role}</p>
                </div>
              </div>
              <p className="job-date">{job.dates}</p>
            </div>
            <div className="job-content">
              <p className="job-summary">{job.summary}</p>
              <ExperienceDisclosure
                label={localizedContent.details}
                initiallyOpen={i === 0}
              >
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </ExperienceDisclosure>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
