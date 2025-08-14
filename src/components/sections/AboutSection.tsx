import imageLight from '@assets/images/i__light.png'
import imageDark from '@assets/images/i__dark.png'
import { useEffect } from 'react'
import type { Theme } from '@/lib/hooks/useTheme'
import styles from './AboutSection.module.scss'

export function AboutSection({ theme }: { theme: Theme }) {
  // Предзагружаем изображение тёмной темы заранее, чтобы при переключении не было задержки загрузки
  useEffect(() => {
    try {
      const darkImg = new Image()
      darkImg.decoding = 'async'
      darkImg.src = imageDark
    } catch {}
  }, [])
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
