import imageLight from '@assets/images/i__light-21.png'
import imageDark from '@assets/images/i__dark-21.png'
import type { Theme } from '@/lib/hooks/useTheme'
import styles from './AboutSection.module.scss'

export function AboutSection({ theme }: { theme: Theme }) {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.root}`}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span>
              <span className="accentWord">Привет!</span> Меня зовут
            </span>
            <span>Артем Рыбин.</span>
            <span>Я Frontend - developer.</span>
          </h1>
        </div>
        <div className={styles.right}>
          <div className={styles.imageCard}>
            <img
              className={styles.image}
              src={theme === 'light' ? imageLight : imageDark}
              alt="Артем Рыбин фото"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
