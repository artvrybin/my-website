import { useEffect } from 'react'

/**
 * Отслеживает элемент с атрибутом `[data-header]` и записывает его `offsetHeight`
 * в CSS‑переменную `--headerHeight` на корневом элементе.
 *
 * - Использует ResizeObserver, если доступен; иначе ничего не делает
 * - Инициализирует значение сразу
 * - Безопасно для SSR
 */
export function useHeaderHeight() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = document.querySelector('[data-header]') as HTMLElement | null
    if (!el || !('ResizeObserver' in window)) return
    const apply = () => document.documentElement.style.setProperty('--headerHeight', `${el.offsetHeight}px`)
    const ro = new ResizeObserver(apply)
    ro.observe(el)
    apply()
    return () => ro.disconnect()
  }, [])
}


