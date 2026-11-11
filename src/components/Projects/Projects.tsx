import { ArrowUpRight, Github } from 'lucide-react'

import type { ProjectsProps } from '@/components/Projects/types'
import { SectionTitle } from '@/components/SectionTitle'
import { assetPath } from '@/helpers/paths'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import '@/components/Projects/Projects.css'

type VideoSources = { mp4: string; webm: string; poster: string }

// Phones get a horizontal cut above the text; wider cards keep the vertical one beside it.
function ProjectVideo({
  video,
}: {
  video: VideoSources & { label: string; wide: VideoSources }
}) {
  const narrow = useMediaQuery('(max-width: 640px)')
  const source = narrow ? video.wide : video
  return (
    <div className={`project-video${narrow ? ' project-video-wide' : ''}`}>
      <video
        key={source.mp4}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={assetPath(source.poster)}
        aria-label={video.label}
        width={narrow ? 960 : 540}
        height={narrow ? 540 : 960}
      >
        <source src={assetPath(source.webm)} type="video/webm" />
        <source src={assetPath(source.mp4)} type="video/mp4" />
      </video>
    </div>
  )
}

export function Projects({
  localizedContent,
  personal = false,
}: ProjectsProps) {
  const projects = personal
    ? localizedContent.personalProjects
    : localizedContent.projects
  return (
    <section id={personal ? 'personal-projects' : 'projects'}>
      <SectionTitle
        n={personal ? '03' : '02'}
        label={localizedContent.nav[personal ? 2 : 1]}
        title={
          personal
            ? localizedContent.personalProjectsTitle
            : localizedContent.projectsTitle
        }
      />
      <div className={`projects${personal ? ' projects-personal' : ''}`}>
        {projects.map((p) => (
          <article
            className={`project${'video' in p && p.video ? ' project-with-video' : ''}`}
            key={p.name}
          >
            {'video' in p && p.video && <ProjectVideo video={p.video} />}
            <div className="project-body">
              <div className="project-identity">
                {p.logo && (
                  <img
                    className={`project-logo${p.logo.endsWith('/pik.svg') ? ' project-logo-wordmark' : ''}`}
                    src={assetPath(p.logo)}
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
