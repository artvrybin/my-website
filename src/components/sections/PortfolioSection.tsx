import styles from './PortfolioSection.module.scss'
import { useEffect, useState } from 'react'
import { SplitCard, SplitCardAspect } from '../ui/SplitCard'
import { TileWrapper } from '../ui/TileWrapper'
import projectImage from '@assets/images/project-image-0.png'
import iconNextjs from '../../assets/icons/icon-nextjs.svg'
import iconReactHookForm from '../../assets/icons/icon-react-hook-form.svg'
import iconStripe from '../../assets/icons/icon-stripe.svg'
import iconSass from '../../assets/images/icons/sass.svg'
import iconScss from '../../assets/images/icons/scss.svg'
import iconVite from '../../assets/images/icons/vite.svg'
import iconTS from '../../assets/images/icons/typescript.svg'
import iconReact from '../../assets/images/icons/react.svg'
import iconReactRouter from '../../assets/images/icons/react-router.svg'
import iconRedux from '../../assets/images/icons/redux.svg'
import iconRTK from '../../assets/images/icons/redux-toolkit.svg'
import iconReduxPersist from '../../assets/images/icons/redux-persist.svg'
import iconFormik from '../../assets/images/icons/formik.svg'
import iconYup from '../../assets/images/icons/yup.svg'
import iconPostCSS from '../../assets/images/icons/postcss.svg'
import iconVitest from '../../assets/images/icons/vitest.svg'
import iconI18n from '@assets/icons/icon-i18n.svg'
import iconSocketio from '@assets/icons/icon-Socket-io.svg'

export function PortfolioSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxCaption, setLightboxCaption] = useState<string | null>(null)

  useEffect(() => {
    if (!isLightboxOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isLightboxOpen])

  const openLightbox = (src: string, caption?: string) => {
    setLightboxSrc(src)
    setLightboxCaption(caption ?? null)
    setIsLightboxOpen(true)
  }
  const closeLightbox = () => setIsLightboxOpen(false)

  return (
    <section id="portfolio" className={`section ${styles.root}`}>
      <div className="container">
        <h2 className={styles.title}>
          Мои <span className="accentWord">Работы</span>
        </h2>
        <div className={styles.list}>
          <SplitCard
            as="article"
            frameLeft
            leftWidth={390}
            aspect="390 / 320"
            data-js-gallery-container
            left={
              <SplitCardAspect>
                <button
                  type="button"
                  className={styles.imageWrapper}
                  aria-label="Открыть изображение в полный размер"
                  onClick={() => openLightbox(projectImage, 'proj')}
                >
                  <img
                    className={styles.image}
                    src={projectImage}
                    alt="Скриншот проекта"
                    width={390}
                    height={320}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </SplitCardAspect>
            }
          >
            <div className={styles.body}>
              <time className={styles.date} dateTime="2022-08">
                Сентябрь 2024
              </time>
              <h3 className={styles.cardTitle}>
                <a
                  className={styles.link}
                  href="https://pictorial.work/"
                  target="_blank"
                  rel="noreferrer"
                  title="Открыть сайт в новой вкладке"
                >
                  Pictorial Project
                </a>
              </h3>
              <div className={styles.description}>
                Портал для обмена контентом — веб-приложение для общения, публикации
                материалов и взаимодействия между пользователями в рамках
                онлайн-сообщества.
              </div>
              <div className={styles.tiles}>
                {[
                  { src: iconNextjs, alt: 'Next.js', label: 'Next.js' },
                  { src: iconSass, alt: 'Sass', label: 'Sass' },
                  { src: iconScss, alt: 'SCSS', label: 'SCSS' },
                  { src: iconRTK, alt: 'Redux Toolkit', label: 'Redux Toolkit' },
                  { src: iconRedux, alt: 'React Redux', label: 'React Redux' },
                  {
                    src: iconReactHookForm,
                    alt: 'React Hook Form',
                    label: 'React Hook Form',
                  },
                  { src: iconI18n, alt: 'I18n', label: 'I18n' },
                  { src: iconStripe, alt: 'Stripe', label: 'Stripe' },
                  { src: iconSocketio, alt: 'Socket.io', label: 'Socket.io' },
                ].map(item => (
                  <TileWrapper
                    key={item.label}
                    variant="pill"
                    pillHeight={40}
                    aria-label={item.alt}
                    title={item.alt}
                  >
                    {item.src && (
                      <img className={styles.tileImg} src={item.src} alt={item.alt} />
                    )}
                    {item.label}
                  </TileWrapper>
                ))}
              </div>
            </div>
          </SplitCard>
          <SplitCard
            as="article"
            frameLeft
            leftWidth={390}
            aspect="390 / 320"
            data-js-gallery-container
            left={
              <SplitCardAspect>
                <button
                  type="button"
                  className={styles.imageWrapper}
                  aria-label="Открыть изображение в полный размер"
                  onClick={() => openLightbox(projectImage, 'proj')}
                >
                  <img
                    className={styles.image}
                    src={projectImage}
                    alt="Скриншот проекта"
                    width={390}
                    height={320}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </SplitCardAspect>
            }
          >
            <div className={styles.body}>
              <time className={styles.date} dateTime="2022-08">
                Date
              </time>
              <h3 className={styles.cardTitle}>
                <a
                  className={styles.link}
                  href=" "
                  target="_blank"
                  rel="noreferrer"
                  title="Открыть сайт в новой вкладке"
                >
                  Project
                </a>
              </h3>
              <div className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, nostrum!.
              </div>
              <div className={styles.tiles}>
                {[
                  { src: iconVite, alt: 'Vite', label: 'Vite' },
                  { src: iconTS, alt: 'TypeScript', label: 'TypeScript' },
                  { src: iconReact, alt: 'React', label: 'React' },
                  { src: iconReactRouter, alt: 'React Router', label: 'React Router' },
                  { src: iconRedux, alt: 'Redux', label: 'Redux' },
                  { src: iconRTK, alt: 'Redux Toolkit', label: 'Redux Toolkit' },
                  { src: iconReduxPersist, alt: 'Redux Persist', label: 'Redux Persist' },
                  { src: iconFormik, alt: 'Formik', label: 'Formik' },
                  { src: iconYup, alt: 'Yup', label: 'Yup' },
                  { src: iconPostCSS, alt: 'PostCSS', label: 'PostCSS' },
                  { src: iconVitest, alt: 'Vitest', label: 'Vitest' },
                ].map(item => (
                  <TileWrapper
                    key={item.label}
                    variant="pill"
                    pillHeight={40}
                    aria-label={item.alt}
                    title={item.alt}
                  >
                    {item.src && (
                      <img className={styles.tileImg} src={item.src} alt={item.alt} />
                    )}
                    {item.label}
                  </TileWrapper>
                ))}
              </div>
            </div>
          </SplitCard>
        </div>
        {isLightboxOpen && (
          <div
            className={styles.lb}
            role="dialog"
            aria-modal="true"
            onClick={closeLightbox}
          >
            <div className={styles.lbInner} onClick={e => e.stopPropagation()}>
              <img
                className={styles.lbImg}
                src={lightboxSrc ?? ''}
                alt={lightboxCaption ?? 'Изображение'}
              />
              {lightboxCaption && (
                <div className={styles.lbCaption}>{lightboxCaption}</div>
              )}
              <button
                type="button"
                aria-label="Закрыть"
                className={styles.lbClose}
                onClick={closeLightbox}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
