import { useCallback, useEffect, useState } from 'react'

export type LightboxState = {
  isOpen: boolean
  src: string | null
  caption: string | null
}

/**
 * Хук для управления лайтбоксом.
 * 
 * Функциональность:
 * - Управление состоянием открытия/закрытия
 * - Обработка Escape для закрытия
 * - Блокировка скролла при открытом лайтбоксе
 */
export const useLightbox = () => {
  const [lightbox, setLightbox] = useState<LightboxState>({
    isOpen: false,
    src: null,
    caption: null,
  })

  const openLightbox = useCallback((src: string, caption?: string) => {
    setLightbox({
      isOpen: true,
      src,
      caption: caption ?? null,
    })
  }, [])

  const closeLightbox = useCallback(() => {
    setLightbox({
      isOpen: false,
      src: null,
      caption: null,
    })
  }, [])

  // Обработка Escape и блокировка скролла
  useEffect(() => {
    if (!lightbox.isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      }
    }

    // Блокируем скролл
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightbox.isOpen, closeLightbox])

  return {
    lightbox,
    openLightbox,
    closeLightbox,
  }
}
