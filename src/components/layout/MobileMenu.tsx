type MobileMenuProps = {
  open: boolean
  onNavigate: () => void
  onClose?: () => void
}

import styles from './MobileMenu.module.scss'
import { useEffect, useRef } from 'react'

export function MobileMenu({ open, onNavigate, onClose }: MobileMenuProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const prevFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!open) return
    prevFocusRef.current = (document.activeElement as HTMLElement) ?? null
    // Автофокус на первый доступный элемент
    const root = rootRef.current
    if (!root) return
    const focusables = root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    const first = focusables[0]
    if (first) setTimeout(() => first.focus(), 0)
    return () => {
      // Возвращаем фокус на предыдущий триггер
      const prev = prevFocusRef.current
      if (prev) setTimeout(() => prev.focus(), 0)
    }
  }, [open])

  if (!open) return null
  return (
    <div
      id="mobile-menu"
      data-mobile-menu
      ref={rootRef}
      className={`${styles.root} ${open ? styles.open : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Мобильное меню"
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose?.()
        if (e.key === 'Tab') {
          const root = e.currentTarget as HTMLElement
          const focusables = root.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
          if (focusables.length === 0) return
          const first = focusables[0]
          const last = focusables[focusables.length - 1]
          const active = document.activeElement as HTMLElement | null
          if (!active) return
          if (e.shiftKey && active === first) {
            e.preventDefault(); (last as HTMLElement).focus();
          } else if (!e.shiftKey && active === last) {
            e.preventDefault(); (first as HTMLElement).focus();
          }
        }
      }}
    >
      <div className={`container ${styles.inner}`}>
        <nav aria-label="Мобильное меню">
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="/#about" onClick={onNavigate}>Обо мне</a>
            </li>
            <li>
              <a className={styles.link} href="/#skills" onClick={onNavigate}>Навыки</a>
            </li>
            <li>
              <a className={styles.link} href="/#portfolio" onClick={onNavigate}>Портфолио</a>
            </li>
            <li>
              <a className={styles.link} href="/#experience" onClick={onNavigate}>Опыт</a>
            </li>
            <li>
              <a className={styles.link} href="/#contacts" onClick={onNavigate}>Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}


