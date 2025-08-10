import heroImage from '@assets/images/hero-image.png'
import styles from './AboutSection.module.scss'

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className={`container ${styles.root}`}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <span>
              <span className="accentWord">Hello!</span> My name is
            </span>
            <span>Artem Rybin.</span>
            <span>I am a frontend developer.</span>
          </h1>
        </div>
        <div className={styles.right}>
          <img
            className={styles.image}
            src={heroImage}
            alt="Фото автора сайта"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}


