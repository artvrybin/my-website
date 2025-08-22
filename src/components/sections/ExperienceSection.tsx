import { SectionCard } from '@components/ui/SectionCard'
import styles from '@components/sections/ExperienceSection.module.scss'
import { TileWrapper } from '@components/ui/TileWrapper.tsx'
// Импортируем ассеты через алиасы, а не абсолютные /src пути — устойчиво к сборке Vite
import iconNext from '@/assets/icons/icon-nextjs.svg'
import iconReact from '@/assets/images/icons/react.svg'
import iconTS from '@/assets/images/icons/typescript.svg'
import iconJS from '@/assets/images/icons/javascript.svg'
import iconRTK from '@/assets/images/icons/redux-toolkit.svg'
import iconRedux from '@/assets/images/icons/redux.svg'
import iconGear from '@/assets/icons/icon-gear.svg'
import iconScss from '@/assets/images/icons/scss.svg'
import iconStorybook from '@/assets/icons/icon-storybook.svg'
import iconHtml from '@/assets/images/icons/html.svg'
import iconCss from '@/assets/images/icons/css.svg'
import iconFigma from '@/assets/images/icons/figma.svg'

export function ExperienceSection() {
  return (
    <section id="experience" className={`section ${styles.root}`}>
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
              <img className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`} src={iconNext} alt="Next.js" />
              Next.js
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconReact} alt="React" />
              React
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconTS} alt="TypeScript" />
              TypeScript
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconJS} alt="JavaScript" />
              JavaScript
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconRTK} alt="Redux Toolkit" />
              Redux Toolkit
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconRedux} alt="RTK Query" />
              RTK Query
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`} src={iconGear} alt="Radix UI" />
              Radix UI
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`} src={iconGear} alt="shadcn/ui" />
              shadcn/ui
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconScss} alt="SCSS" />
              SCSS
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={`${styles.tileImg} ${styles.themeAwareDarkInvert}`} src={iconStorybook} alt="Storybook" />
              Storybook
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconHtml} alt="HTML5" />
              HTML5
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconCss} alt="CSS3" />
              CSS3
            </TileWrapper>
            <TileWrapper variant={'pill'}>
              <img className={styles.tileImg} src={iconFigma} alt="Figma" />
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
