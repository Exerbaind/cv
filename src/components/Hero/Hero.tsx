import { ArrowUpRight, Download, MapPin } from 'lucide-react'
import React from 'react'

import type { HeroProps } from '@/components/Hero/types'

import '@/components/Hero/Hero.css'

export function Hero({ localizedContent }: HeroProps) {
  return (
    <section className="hero">
      <div className="eyebrow">
        <span className="live-dot" aria-hidden="true" />
        <span className="hero-name" aria-label={localizedContent.name}>
          <span aria-hidden="true">
            {localizedContent.name.split(' ').map((word, i) => (
              <React.Fragment key={`${localizedContent.name}-${i}`}>
                {i > 0 ? ' ' : null}
                <span className="name-word">
                  {Array.from(word).map((letter, j) => (
                    <span className="name-letter" key={j}>
                      {letter}
                    </span>
                  ))}
                </span>
              </React.Fragment>
            ))}
          </span>
        </span>
        <span className="hero-index">PORTFOLIO / 2026</span>
      </div>
      <h1>
        {localizedContent.role}
        <span className="name-dot">.</span>
      </h1>
      <div className="print-contact">
        <span>{localizedContent.location}</span>
        <a href="mailto:digr98@gmail.com">digr98@gmail.com</a>
        <a href="https://t.me/no_sugar_daddy">@no_sugar_daddy</a>
      </div>
      <div className="hero-grid">
        <div>
          <h2>
            {localizedContent.headline[0]}
            <br />
            <span>{localizedContent.headline[1]}</span>
          </h2>
          <p className="intro">{localizedContent.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact">
              {localizedContent.email}
              <ArrowUpRight size={17} />
            </a>
            <a
              className="button secondary"
              href={localizedContent.cvUrl}
              download
            >
              {localizedContent.cv}
              <Download size={16} />
            </a>
          </div>
          <div className="location">
            <MapPin size={13} />
            {localizedContent.location}
            <span className="dot-sep">·</span>
            <span>{localizedContent.cvHint}</span>
          </div>
        </div>
        <div
          className="hero-art"
          role="group"
          aria-label={localizedContent.aboutCard.label}
        >
          <div className="art-grid" aria-hidden="true" />
          <div className="art-window back" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="art-window front">
            <div className="window-top">
              <i />
              <i />
              <i />
              <small>about.md</small>
            </div>
            <div className="about-card-body">
              <h3>{localizedContent.aboutCard.label}</h3>
              <p>{localizedContent.aboutCard.experience}</p>
              <p>{localizedContent.aboutCard.approach}</p>
            </div>
            <a className="window-bottom" href="#experience">
              {localizedContent.aboutCard.link}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
