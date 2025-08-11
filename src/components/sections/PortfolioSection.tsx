import styles from './PortfolioSection.module.scss'
import { useEffect, useState } from 'react'
import { SplitCard, SplitCardAspect } from '../ui/SplitCard'
import { TileWrapper } from '../ui/TileWrapper'

// Images
import heroImage from '../../assets/images/hero-image.png'
// Tech stack icons
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

// Project-specific styles now live next to the section for clarity

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
                  onClick={() => openLightbox(heroImage, 'proj')}
                >
                  <img
                    className={styles.image}
                    src={heroImage}
                    alt=""
                    width={390}
                    height={320}
                    loading="lazy"
                  />
                </button>
              </SplitCardAspect>
            }
          >
            <div className={styles.body}>
              <time className={styles.date} dateTime="2022-08">
                August 2022
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
                    <img className={styles.tileImg} src={item.src} alt={item.alt} />
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
              <img className={styles.lbImg} src={lightboxSrc ?? ''} alt="" />
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
