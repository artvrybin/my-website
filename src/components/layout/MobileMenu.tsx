type MobileMenuProps = {
  open: boolean
  onNavigate: () => void
  onClose?: () => void
}

import styles from './MobileMenu.module.scss'

export function MobileMenu({ open, onNavigate, onClose }: MobileMenuProps) {
  if (!open) return null
  return (
    <div
      id="mobile-menu"
      data-mobile-menu
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


