import { useEffect, useRef, useState } from 'react'

export function useContact(success: () => void) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText('digr98@gmail.com')
      setCopied(true)
      success()
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      location.href = 'mailto:digr98@gmail.com'
    }
  }
  return { copied, copy }
}
