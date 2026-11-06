import { Sun, Moon } from 'lucide-react'
import { useSyncExternalStore } from 'react'

import type { HeaderProps } from '@/components/Header/types'

import '@/components/Header/Header.css'

const subscribe = () => () => {}
const clientSnapshot = () => true
const serverSnapshot = () => false

const ids = ['experience', 'projects', 'stack', 'contact']

export function Header({
  localizedContent,
  lang,
  theme,
  onLanguageChange,
  onThemeChange,
}: HeaderProps) {
  const hydrated = useSyncExternalStore(
    subscribe,
    clientSnapshot,
    serverSnapshot
  )
  return (
    <header className="header">
      <a className="logo" href="#" aria-label={localizedContent.name}>
        ds<span>.</span>
      </a>
      <nav aria-label={lang === 'en' ? 'Main navigation' : 'Навигация'}>
        {localizedContent.nav.map((n, i) => (
          <a key={n} href={`#${ids[i]}`}>
            {n}
          </a>
        ))}
      </nav>
      <div className="controls">
        <div className="language" aria-label="Language">
          <a
            href="/"
            hrefLang="en"
            aria-current={lang === 'en' ? 'page' : undefined}
            data-haptic="manual"
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return
              event.preventDefault()
              onLanguageChange('en')
            }}
          >
            EN
          </a>
          <span>/</span>
          <a
            href="/ru/"
            hrefLang="ru"
            aria-current={lang === 'ru' ? 'page' : undefined}
            data-haptic="manual"
            onClick={(event) => {
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return
              event.preventDefault()
              onLanguageChange('ru')
            }}
          >
            RU
          </a>
        </div>
        <span className="divider" />
        <button
          className="icon-button"
          onClick={onThemeChange}
          aria-label={lang === 'en' ? 'Toggle color theme' : 'Переключить тему'}
        >
          <span className="theme-icon" key={theme}>
            {!hydrated || theme === 'light' ? (
              <Moon size={17} />
            ) : (
              <Sun size={17} />
            )}
          </span>
        </button>
      </div>
    </header>
  )
}
