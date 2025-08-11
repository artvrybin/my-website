import styles from './Header.module.scss'

type Theme = 'dark' | 'light'

export type HeaderProps = {
  theme: Theme
  onToggleTheme: () => void
  menuOpen: boolean
  onToggleMenu: () => void
  onCloseMenu: () => void
  scrolled: boolean
}

export function Header({ theme, onToggleTheme, menuOpen, onToggleMenu, onCloseMenu, scrolled }: HeaderProps) {
  function handleMenuToggle(ev: React.MouseEvent<HTMLButtonElement>) {
    const trigger = ev.currentTarget
    onToggleMenu()
    // Возвращаем фокус на триггер после закрытия меню (на следующем тике)
    if (menuOpen) {
      setTimeout(() => {
        try { trigger.focus() } catch {}
      }, 0)
    }
  }
  return (
    <header data-header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>Артем Рыбин</div>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Основная навигация">
          <a href="/#about" onClick={onCloseMenu}>Обо мне</a>
          <a href="/#skills" onClick={onCloseMenu}>Навыки</a>
          <a href="/#portfolio" onClick={onCloseMenu}>Портфолио</a>
          <a href="/#experience" onClick={onCloseMenu}>Опыт</a>
          <a href="/#contacts" onClick={onCloseMenu}>Контакты</a>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.themeSwitch}
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
            aria-pressed={theme === 'light'}
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          >
            <span className={styles.body}>
              <span className={`${styles.iconWrapper} ${styles.iconWrapperDark}`}>
                <span className={`${styles.icon} ${styles.iconMoon}`} />
              </span>
              <span className={`${styles.iconWrapper} ${styles.iconWrapperLight}`}>
                <span className={`${styles.icon} ${styles.iconSun}`} />
              </span>
            </span>
          </button>
          <button
            type="button"
            className={styles.menuToggle}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
            onClick={handleMenuToggle}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}


