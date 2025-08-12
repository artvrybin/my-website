import { useEffect, useState } from 'react'
import '@styles/site.scss'
import { AboutSection } from '@components/sections/AboutSection'
import { SkillsSection } from '@components/sections/SkillsSection'
import { PortfolioSection } from '@components/sections/PortfolioSection'
import { ExperienceSection } from '@components/sections/ExperienceSection'
import { ContactsSection } from '@components/sections/ContactsSection'
import { Header } from '@components/layout/Header'
import { MobileMenu } from '@components/layout/MobileMenu'
import { useTheme } from '@/lib/hooks/useTheme'
import { useScrollFlag } from '@/lib/hooks/useScrollFlag'
import { useHeaderHeight } from '@/lib/hooks/useHeaderHeight'
import { useMobileMenuLock } from '@/lib/hooks/useMobileMenuLock'

export default function Page() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [theme, toggleTheme, ensureHtmlClass] = useTheme('dark')
    const scrolled = useScrollFlag(8)
    useHeaderHeight()
    useMobileMenuLock(menuOpen)

    // Гарантируем наличие класса `.site` на <html> один раз при маунте
    useEffect(() => { ensureHtmlClass() }, [ensureHtmlClass])

    return (
        <>
            <a href="#main" className="skipLink">Перейти к контенту</a>

            <Header
                theme={theme}
                onToggleTheme={toggleTheme}
                menuOpen={menuOpen}
                onToggleMenu={() => setMenuOpen(v => !v)}
                onCloseMenu={() => setMenuOpen(false)}
                scrolled={scrolled}
            />

            <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} onClose={() => setMenuOpen(false)} />

            <main id="main">
                <AboutSection theme={theme}/>

                <SkillsSection/>

                <PortfolioSection/>

                <ExperienceSection/>

                <ContactsSection/>
            </main>

            {/* Футера нет: локальный футер находится внутри ContactsSection */}
        </>
    )
}
