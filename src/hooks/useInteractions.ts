import { useCallback, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'
import { useWebHaptics } from 'web-haptics/react'

import type { Lang } from '@/types'

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
const translatedText =
  'main h2, main h3, main p, main li, main summary, .job-toggle, .section-label, .hero-actions a, .location, .header nav a, footer button'

export function useInteractions() {
  const { trigger } = useWebHaptics({ debug: false })
  const animations = useRef<Animation[]>([])
  const revision = useRef(0)
  const themeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  )
  const stopAnimations = useCallback(() => {
    animations.current.forEach((animation) => animation.cancel())
    animations.current = []
  }, [])
  const tap = useCallback(() => {
    // Unsupported devices remain silent; feedback must never block navigation.
    void trigger([{ duration: 18, intensity: 0.35 }])?.catch(() => {})
  }, [trigger])
  const success = useCallback(() => {
    void trigger('success', { intensity: 0.45 })?.catch(() => {})
  }, [trigger])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>('a, button, summary')
          : null
      if (
        !target ||
        target.matches(
          ':disabled, [aria-disabled="true"], [data-haptic="manual"]'
        )
      )
        return
      tap()
    }
    document.addEventListener('click', onClick, { capture: true })
    return () =>
      document.removeEventListener('click', onClick, { capture: true })
  }, [tap])

  const invalidateLanguageChange = useCallback(() => {
    revision.current++
  }, [])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      if (preference.matches) {
        stopAnimations()
        document.documentElement.classList.remove('theme-changing')
      }
    }
    preference.addEventListener('change', onChange)
    return () => {
      invalidateLanguageChange()
      stopAnimations()
      clearTimeout(themeTimer.current)
      document.documentElement.classList.remove('theme-changing')
      preference.removeEventListener('change', onChange)
    }
  }, [stopAnimations, invalidateLanguageChange])

  const changeLanguage = async (
    next: Lang,
    current: Lang,
    commit: (lang: Lang) => void
  ) => {
    const request = ++revision.current
    stopAnimations()
    if (next === current) return
    tap()
    if (reducedMotion() || !Element.prototype.animate) {
      commit(next)
      return
    }
    const outgoing = Array.from(
      document.querySelectorAll<HTMLElement>(translatedText)
    )
      .filter((element) => !element.closest('[aria-hidden="true"]'))
      .map((element) =>
        element.animate(
          [
            { opacity: 1, transform: 'translateY(0)' },
            { opacity: 0, transform: 'translateY(-4px)' },
          ],
          { duration: 110, easing: 'ease-in' }
        )
      )
    animations.current = outgoing
    await Promise.all(
      outgoing.map((animation) => animation.finished.catch(() => {}))
    )
    if (request !== revision.current) return
    flushSync(() => commit(next))
    if (reducedMotion()) return
    const incoming = Array.from(
      document.querySelectorAll<HTMLElement>(translatedText)
    )
      .filter((element) => !element.closest('[aria-hidden="true"]'))
      .map((element) =>
        element.animate(
          [
            { opacity: 0, transform: 'translateY(5px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 240, easing: 'cubic-bezier(.2,.7,.2,1)' }
        )
      )
    const letters = Array.from(
      document.querySelectorAll<HTMLElement>('.name-letter')
    ).map((letter, index) =>
      letter.animate(
        [
          {
            opacity: 0,
            transform: 'perspective(400px) rotateX(-75deg) translateY(5px)',
          },
          {
            opacity: 1,
            transform: 'perspective(400px) rotateX(0) translateY(0)',
          },
        ],
        {
          duration: 310,
          delay: index * 12,
          fill: 'backwards',
          easing: 'cubic-bezier(.2,.7,.2,1)',
        }
      )
    )
    animations.current = [...incoming, ...letters]
    await Promise.all(
      animations.current.map((animation) => animation.finished.catch(() => {}))
    )
    if (request === revision.current) stopAnimations()
  }

  const prepareThemeChange = () => {
    clearTimeout(themeTimer.current)
    if (reducedMotion()) return
    document.documentElement.classList.add('theme-changing')
    themeTimer.current = setTimeout(() => {
      document.documentElement.classList.remove('theme-changing')
    }, 500)
  }

  return { changeLanguage, prepareThemeChange, success }
}
