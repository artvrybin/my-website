import { useEffect } from 'react'

/**
 * Блокирует прокрутку `body`, когда открыто мобильное меню, и компенсирует ширину скроллбара.
 *
 * Когда `open === true`:
 * - Ставит `document.body.style.overflow = 'hidden'`
 * - Вычисляет ширину скроллбара и добавляет правый `padding`, чтобы не было сдвига макета
 * - Добавляет класс `.is-mobile-menu-open` на `<html>` (для CSS‑правок)
 * - Вешает обработчик `resize` для пересчёта компенсации
 *
 * При закрытии и размонтировании:
 * - Восстанавливает исходные инлайн‑стили и удаляет класс
 * - Снимает обработчики
 *
 * Безопасно для SSR: доступ к DOM только внутри эффектов
 */
export function useMobileMenuLock(open: boolean) {
  useEffect(() => {
    if (typeof document === 'undefined') return
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    const setScrollbarCompensation = () => {
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${Math.max(scrollbarW, 0)}px`
    }
    const onResize = () => setScrollbarCompensation()

    if (open) {
      document.body.style.overflow = 'hidden'
      document.documentElement.classList.add('is-mobile-menu-open')
      setScrollbarCompensation()
      window.addEventListener('resize', onResize)
    } else {
      document.body.style.overflow = originalOverflow || ''
      document.documentElement.classList.remove('is-mobile-menu-open')
      document.body.style.paddingRight = originalPaddingRight || ''
      window.removeEventListener('resize', onResize)
    }
    return () => {
      document.body.style.overflow = originalOverflow || ''
      document.documentElement.classList.remove('is-mobile-menu-open')
      document.body.style.paddingRight = originalPaddingRight || ''
      window.removeEventListener('resize', onResize)
    }
  }, [open])
}


