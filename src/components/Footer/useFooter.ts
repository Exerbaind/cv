import { useEffect, useState } from 'react'

import type { InstallPrompt } from '@/components/Footer/types'

export function useFooter() {
  const [install, setInstall] = useState<InstallPrompt | null>(null)
  useEffect(() => {
    const prompt = (event: Event) => {
      event.preventDefault()
      setInstall(event as InstallPrompt)
    }
    window.addEventListener('beforeinstallprompt', prompt)
    return () => window.removeEventListener('beforeinstallprompt', prompt)
  }, [])

  async function requestInstall() {
    if (!install) return
    await install.prompt()
    if ((await install.userChoice).outcome === 'accepted') setInstall(null)
  }
  return { install, requestInstall, print: () => window.print() }
}
