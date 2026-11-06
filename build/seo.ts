import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { createServer, type Plugin } from 'vite'

import { seoData, siteOrigin } from '../src/helpers/seo'

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      })[char]!
  )

export function seoPlugin(siteUrl: string | undefined): Plugin {
  const origin = siteOrigin(siteUrl)
  let root = process.cwd()
  return {
    name: 'cv-static-seo',
    apply: 'build',
    enforce: 'post',
    configResolved(config) {
      root = config.root
    },
    async generateBundle(_, bundle) {
      const entry = bundle['index.html']
      if (!entry || entry.type !== 'asset')
        throw new Error('Missing index.html')
      const template = String(entry.source)
      const server = await createServer({
        configFile: false,
        root,
        resolve: {
          alias: { '@': resolve(root, 'src') },
        },
        plugins: [react()],
        server: { middlewareMode: true, watch: null, hmr: false, ws: false },
        optimizeDeps: { noDiscovery: true },
        appType: 'custom',
      })
      try {
        const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
        for (const lang of ['en', 'ru'] as const) {
          const data = seoData(lang, origin)
          const links = origin
            ? `
            <link rel="canonical" href="${escapeHtml(data.url!)}" />
            <link rel="alternate" hreflang="en" href="${origin}/" />
            <link rel="alternate" hreflang="ru" href="${origin}/ru/" />
            <link rel="alternate" hreflang="x-default" href="${origin}/" />
            <meta property="og:url" content="${escapeHtml(data.url!)}" />`
            : ''
          const head = `<title>${escapeHtml(data.title)}</title>
            <meta name="description" content="${escapeHtml(data.description)}" />
            <meta property="og:type" content="profile" />
            <meta property="og:title" content="${escapeHtml(data.title)}" />
            <meta property="og:description" content="${escapeHtml(data.description)}" />
            <meta property="og:locale" content="${lang === 'ru' ? 'ru_RU' : 'en_US'}" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="${escapeHtml(data.title)}" />
            <meta name="twitter:description" content="${escapeHtml(data.description)}" />
            ${links}
            <script id="profile-schema" type="application/ld+json">${JSON.stringify(data.profile).replace(/</g, '\\u003c')}</script>`
          const html = template
            .replace(/<html lang="en">/, `<html lang="${lang}">`)
            .replace(/<title>[\s\S]*?<\/title>/, '')
            .replace(
              /<meta\s+(?:name="description"|property="og:[^"]+")[^>]*>/g,
              ''
            )
            .replace('</head>', `${head}</head>`)
            .replace(
              '<div id="root"></div>',
              `<div id="root" data-language="${lang}">${render(lang)}</div>`
            )
          if (lang === 'en') entry.source = html
          else
            this.emitFile({
              type: 'asset',
              fileName: 'ru/index.html',
              source: html,
            })
        }
        const robots = `User-agent: *\nAllow: /\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
        if (origin) {
          this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url><url><loc>${origin}/ru/</loc></url></urlset>\n`,
          })
        } else {
          this.warn(
            'Set VITE_SITE_URL after buying a domain to generate canonical, hreflang and sitemap URLs.'
          )
        }
      } finally {
        await server.close()
      }
    },
  }
}
