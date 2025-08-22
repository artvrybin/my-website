import { memo } from 'react'
import styles from '../sections/PortfolioSection.module.scss'

type LightboxProps = {
  src: string
  caption?: string | null
  onClose: () => void
}

export const Lightbox = memo<LightboxProps>(({ src, caption, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <div
      className={styles.lb}
      role="dialog"
      aria-modal="true"
      aria-label="Просмотр изображения"
      onClick={handleBackdropClick}
    >
      <div className={styles.lbInner} onClick={e => e.stopPropagation()}>
        <img
          className={styles.lbImg}
          src={src}
          alt={caption ?? 'Изображение'}
        />
        {caption && (
          <div className={styles.lbCaption}>{caption}</div>
        )}
        <button
          type="button"
          aria-label="Закрыть"
          className={styles.lbClose}
          onClick={onClose}
          onKeyDown={handleKeyDown}
          autoFocus
        >
          ×
        </button>
      </div>
    </div>
  )
})

Lightbox.displayName = 'Lightbox'
