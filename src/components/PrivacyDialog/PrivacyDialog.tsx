import { X } from 'lucide-react'

import type { PrivacyDialogProps } from '@/components/PrivacyDialog/types'
import { usePrivacyDialog } from '@/components/PrivacyDialog/usePrivacyDialog'

import '@/components/PrivacyDialog/PrivacyDialog.css'

export function PrivacyDialog({
  localizedContent,
  open,
  onClose,
}: PrivacyDialogProps) {
  const { dialog, onBackdropClick } = usePrivacyDialog(open, onClose)
  return (
    <dialog ref={dialog} onCancel={onClose} onClick={onBackdropClick}>
      <div className="dialog-top">
        <h2>{localizedContent.privacyTitle}</h2>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label={localizedContent.close}
        >
          <X size={20} />
        </button>
      </div>
      <p>{localizedContent.privacyText}</p>
    </dialog>
  )
}
