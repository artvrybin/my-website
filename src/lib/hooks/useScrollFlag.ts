import { useEffect, useState } from 'react'

/**
 * Возвращает булев флаг, который становится `true`, когда страница прокручена ниже `threshold` пикселей.
 *
 * - На маунте добавляет пассивный обработчик `scroll`
 * - Сразу вычисляет начальное значение
 * - На анмаунте снимает обработчик
 * - Безопасно для SSR (проверяет наличие `window`)
 *
 * @param threshold — смещение по Y в пикселях, после которого флаг `true`. По умолчанию: 8
 */
export function useScrollFlag(threshold = 8) {
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const onScroll = () => setFlag(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return flag
}


