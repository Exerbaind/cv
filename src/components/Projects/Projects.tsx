import { ArrowUpRight, Github } from 'lucide-react'

import type { ProjectsProps } from '@/components/Projects/types'
import { SectionTitle } from '@/components/SectionTitle'

import '@/components/Projects/Projects.css'

export function Projects({ localizedContent }: ProjectsProps) {
  return (
    <section id="projects">
      <SectionTitle
        n="02"
        label={localizedContent.nav[1]}
        title={localizedContent.projectsTitle}
      />
      <div className="projects">
        {localizedContent.projects.map((p) => (
          <article className="project" key={p.name}>
            <div className="project-body">
              <div className="project-identity">
                {p.logo && (
                  <img
                    className={`project-logo${p.logo.endsWith('.svg') ? ' project-logo-wordmark' : ''}`}
                    src={p.logo}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div>
                  <span className="small-mono">{p.type}</span>
                  <h3>{p.name}</h3>
                </div>
              </div>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {'url' in p && p.url && (
                  <a
                    className="project-link"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${localizedContent.view}: ${p.name}`}
                  >
                    {localizedContent.view}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {'github' in p && p.github && (
                  <a
                    className="project-link"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub: ${p.name}`}
                  >
                    <Github size={14} aria-hidden="true" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
