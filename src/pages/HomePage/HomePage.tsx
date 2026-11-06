import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrivacyDialog } from '@/components/PrivacyDialog'
import { Projects } from '@/components/Projects'
import { Stack } from '@/components/Stack'
import { useHomePage } from '@/pages/HomePage/useHomePage'

import '@/pages/HomePage/HomePage.css'
import '@/styles/print.css'

export function HomePage() {
  const {
    localizedContent,
    lang,
    theme,
    privacy,
    offline,
    success,
    openPrivacy,
    closePrivacy,
    changeLanguage,
    toggleTheme,
  } = useHomePage()
  return (
    <>
      <a className="skip" href="#main">
        {lang === 'en' ? 'Skip to content' : 'К содержимому'}
      </a>
      <Header
        localizedContent={localizedContent}
        lang={lang}
        theme={theme}
        onLanguageChange={changeLanguage}
        onThemeChange={toggleTheme}
      />
      <main id="main">
        <Hero localizedContent={localizedContent} />
        <Experience localizedContent={localizedContent} />
        <Projects localizedContent={localizedContent} />
        <Stack localizedContent={localizedContent} />
        <Contact localizedContent={localizedContent} onSuccess={success} />
      </main>
      <Footer
        localizedContent={localizedContent}
        lang={lang}
        onPrivacyOpen={openPrivacy}
      />
      {offline && (
        <div className="offline" role="status">
          {localizedContent.offline}
        </div>
      )}
      <PrivacyDialog
        localizedContent={localizedContent}
        open={privacy}
        onClose={closePrivacy}
      />
    </>
  )
}
