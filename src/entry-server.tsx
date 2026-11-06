import { renderToString } from 'react-dom/server'

import { HomePage } from '@/pages/HomePage'
import type { Lang } from '@/types'

export function render(lang: Lang) {
  return renderToString(<HomePage initialLang={lang} />)
}
