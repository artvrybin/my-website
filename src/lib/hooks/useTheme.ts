import { useCallback, useEffect, useState } from 'react'

/**
 * Значение темы приложения. Соответствует атрибуту `data-theme` на <html>.
 */
export type Theme = 'dark' | 'light'

/**
 * Хук для управления цветовой темой (безопасно для SSR).
 *
 * Что делает:
 * - Читает сохранённую тему из localStorage при маунте; если нет — берёт из `prefers-color-scheme`
 * - Синхронизирует `document.documentElement.dataset.theme` и хранит значение в localStorage
 * - Возвращает экшн `toggleTheme()`
 * - Возвращает `ensureHtmlClass()` для гарантии наличия класса `.site` на <html> (для CSS‑переменных)
 *
 * SSR:
 * - Доступ к DOM/localStorage только в `useEffect`
 *
 * Возвращает кортеж:
 * - `[0] theme` — текущая тема
 * - `[1] toggleTheme()` — переключает между 'dark' и 'light'
 * - `[2] ensureHtmlClass()` — идемпотентно добавляет `.site` на <html>
 */
export function useTheme(initial: Theme = 'dark') {
  const [theme, setTheme] = useState<Theme>(initial)

  // Читаем сохранённую/предпочитаемую тему при маунте
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const saved = (localStorage.getItem('theme') as Theme | null) ?? null
      const preferred: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(saved ?? preferred)
    } catch {
      // ignore
    }
  }, [])

  // Синхронизируем с DOM и localStorage
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }, [])

  const ensureHtmlClass = useCallback(() => {
    if (typeof document === 'undefined') return
    document.documentElement.classList.add('site')
  }, [])

  return [theme, toggleTheme, ensureHtmlClass] as const
}


