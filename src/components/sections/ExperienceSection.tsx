import { SectionCard } from '@components/ui/SectionCard'
import styles from '@components/sections/ExperienceSection.module.scss'
import { TileWrapper } from '@components/ui/TileWrapper.tsx'

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className={styles.title}>
          Мой <span className="accentWord">Опыт</span>
        </h2>
        <SectionCard>
          <TileWrapper variant={'pill'} className={`${styles.role} ${styles.block}`}>
            Сентябрь 2023 — настоящее время
          </TileWrapper>

          <div className={styles.companyLine}>
            <div className={styles.companyName}>TachiTech</div>
            <div className="muted">Астана</div>
          </div>
          <div className={`${styles.role} ${styles.block}`}>Frontend-разработчик</div>
          <div className={styles.block}>
            Создаю удобные и единообразные интерфейсы: формирую библиотеку компонентов,
            поддерживаю дизайн-систему, сокращаю время вывода функциональности. Готовлю
            адаптивные страницы для маркетинга.
          </div>

          <div className={styles.tiles}>
            <TileWrapper variant={'pill'}>
              <img
                className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`}
                src={'/src/assets/icons/icon-nextjs.svg'}
                alt="Next.js"
              />
              Next.js
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/react.svg'}
                alt="React"
              />
              React
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/typescript.svg'}
                alt="TypeScript"
              />
              TypeScript
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/javascript.svg'}
                alt="JavaScript"
              />
              JavaScript
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/redux-toolkit.svg'}
                alt="Redux Toolkit"
              />
              Redux Toolkit
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/redux.svg'}
                alt="RTK Query"
              />
              RTK Query
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`}
                src={'/src/assets/icons/icon-gear.svg'}
                alt="Radix UI"
              />
              Radix UI
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`}
                src={'/src/assets/icons/icon-gear.svg'}
                alt="shadcn/ui"
              />
              shadcn/ui
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/scss.svg'}
                alt="SCSS"
              />
              SCSS
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`}
                src={'/src/assets/icons/image-storybook.svg'}
                alt="Storybook"
              />
              Storybook
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/html.svg'}
                alt="HTML5"
              />
              HTML5
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/css.svg'}
                alt="CSS3"
              />
              CSS3
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img
                className={styles.tileImg}
                src={'/src/assets/images/icons/figma.svg'}
                alt="Figma"
              />
              Figma
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <span className={`${styles.icon} ${styles.pixso} ${styles.brandPixso}`} />
              Pixso
            </TileWrapper>
          </div>
        </SectionCard>
      </div>
    </section>
  )
}
