type MobileMenuProps = {
  open: boolean
  onNavigate: () => void
}

import styles from './MobileMenu.module.scss'

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <div
      data-mobile-menu
      className={`${styles.root} ${open ? styles.open : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
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


