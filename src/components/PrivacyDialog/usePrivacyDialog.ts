import { useEffect, useRef, type MouseEvent } from 'react'

export function usePrivacyDialog(open: boolean, onClose: () => void) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (open) dialog.current?.showModal()
    else dialog.current?.close()
  }, [open])
  return {
    dialog,
    onBackdropClick: (event: MouseEvent<HTMLDialogElement>) => {
      if (event.target === event.currentTarget) onClose()
    },
  }
}
