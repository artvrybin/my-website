import {useEffect, useRef, useState} from 'react'
import '@styles/site.scss'
import {AboutSection} from '@components/sections/AboutSection'
import {SkillsSection} from '@components/sections/SkillsSection'
import {PortfolioSection} from '@components/sections/PortfolioSection'
import {ExperienceSection} from '@components/sections/ExperienceSection'
import {ContactsSection} from '@components/sections/ContactsSection'
import {siteMeta} from '@data'
import {Header} from '@components/layout/Header'
import {MobileMenu} from '@components/layout/MobileMenu'

export default function Page() {
    // Тема: берём сохранённое значение; на SSR используем безопасный дефолт
    // Важно: одинаковый initial state для SSR и клиента, чтобы не было hydration mismatch
    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Добавляем класс один раз при монтировании
    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.classList.add('site')
        }
    }, [])

    // Инициализируем тему из localStorage после монтирования (клиент)
    const hasLoadedTheme = useRef(false)
    useEffect(() => {
        const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
        setTheme(saved ?? 'light')
        hasLoadedTheme.current = true
    }, [])

    // Синхронизируем тему с DOM и (после инициализации) с localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        if (hasLoadedTheme.current) {
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8)
        }
        const onResize = () => {
            // вычисляем и сохраняем ширину скроллбара для компенсации
            const scrollbarW = window.innerWidth - document.documentElement.clientWidth
            document.documentElement.style.setProperty('--scrollbarWidth', `${Math.max(scrollbarW, 0)}px`)
        }
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false)
        }
        onScroll()   // первичная инициализация состояния прокрутки
        onResize()   // первичный расчёт ширины скроллбара
        window.addEventListener('scroll', onScroll, {passive: true})
        window.addEventListener('resize', onResize)
        // слушатель load не нужен: первичный onResize уже вызван выше
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [])

    // Закрываем меню при переходе на десктоп по изменению медиа-условия (вместо resize)
    useEffect(() => {
        if (typeof window === 'undefined') return
        const mq = window.matchMedia('(min-width: 800px)')
        const handler = () => {
            if (mq.matches) setMenuOpen(false)
        }
        mq.addEventListener?.('change', handler)
        handler()
        return () => mq.removeEventListener?.('change', handler)
    }, [])

    // Поддерживаем актуальную высоту хедера через ResizeObserver
    // Если ResizeObserver недоступен — переменная не будет обновляться (поддержка старых браузеров)
    useEffect(() => {
        if (typeof window === 'undefined') return
        const el = document.querySelector('[data-header]') as HTMLElement | null
        if (!el || !('ResizeObserver' in window)) return
        const ro = new ResizeObserver(() => {
            document.documentElement.style.setProperty('--headerHeight', `${el.offsetHeight}px`)
        })
        ro.observe(el)
        // первичная установка
        document.documentElement.style.setProperty('--headerHeight', `${el.offsetHeight}px`)
        return () => ro.disconnect()
    }, [])

    // Блокируем прокрутку фона и компенсируем ширину скроллбара,
    // когда открыто мобильное меню; класс на <html> помогает убрать мигание
    useEffect(() => {
        if (typeof document === 'undefined') return
        const original = document.body.style.overflow
        const originalPaddingRight = document.body.style.paddingRight
        const setScrollbarCompensation = () => {
            const scrollbarW = window.innerWidth - document.documentElement.clientWidth
            document.body.style.paddingRight = `${Math.max(scrollbarW, 0)}px`
        }
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
            document.documentElement.classList.add('is-mobile-menu-open')
            setScrollbarCompensation()
        } else {
            document.body.style.overflow = original || ''
            document.documentElement.classList.remove('is-mobile-menu-open')
            document.body.style.paddingRight = originalPaddingRight || ''
        }
        return () => {
            document.body.style.overflow = original || ''
            document.documentElement.classList.remove('is-mobile-menu-open')
            document.body.style.paddingRight = originalPaddingRight || ''
        }
    }, [menuOpen])

    return (
        <>
            <Header
                theme={theme}
                onToggleTheme={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
                menuOpen={menuOpen}
                onToggleMenu={() => setMenuOpen(v => !v)}
                onCloseMenu={() => setMenuOpen(false)}
                scrolled={scrolled}
            />

            <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)}/>

            <main>
                <AboutSection/>

                <SkillsSection/>

                <PortfolioSection/>

                <ExperienceSection/>

                <ContactsSection/>
            </main>

            <footer className="footer">
                <div className="container">© {siteMeta.name}, {new Date().getFullYear()}</div>
            </footer>
        </>
    )
}
