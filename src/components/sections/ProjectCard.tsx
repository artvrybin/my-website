import { memo } from 'react'
import { SplitCard, SplitCardAspect } from '../ui/SplitCard'
import { TileWrapper } from '../ui/TileWrapper'
import { getTechIcon } from '@data/techStackIcons.ts'
import styles from './PortfolioSection.module.scss'

// Константы
const PROJECT_IMAGE_WIDTH = 390
const PROJECT_IMAGE_HEIGHT = 320
const PILL_HEIGHT = 40

// GitHub SVG иконка
const GitHubIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
))

GitHubIcon.displayName = 'GitHubIcon'

type ProjectCardProps = {
  title: string
  date: string
  description: string
  image: string
  imageAlt: string
  link?: string
  githubLink?: string
  techStack: string[]
  onImageClick: (src: string, caption: string) => void
}

export const ProjectCard = memo<ProjectCardProps>(
  ({
    title,
    date,
    description,
    image,
    imageAlt,
    link,
    githubLink,
    techStack,
    onImageClick,
  }) => {
    const handleImageClick = () => {
      onImageClick(image, title)
    }

    const handleImageKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        handleImageClick()
      }
    }

    return (
      <SplitCard
        as="article"
        frameLeft
        leftWidth={PROJECT_IMAGE_WIDTH}
        aspect={`${PROJECT_IMAGE_WIDTH} / ${PROJECT_IMAGE_HEIGHT}`}
        data-js-gallery-container
        left={
          <SplitCardAspect>
            <button
              type="button"
              className={styles.imageWrapper}
              aria-label="Открыть изображение в полный размер"
              onClick={handleImageClick}
              onKeyDown={handleImageKeyDown}
            >
              <img
                className={styles.image}
                src={image}
                alt={imageAlt}
                width={PROJECT_IMAGE_WIDTH}
                height={PROJECT_IMAGE_HEIGHT}
                loading="lazy"
                decoding="async"
              />
            </button>
          </SplitCardAspect>
        }
      >
        <div className={styles.body}>
          <time className={styles.date} dateTime={date}>
            {date}
          </time>
          <h3 className={styles.cardTitle}>
            {link ? (
              <a
                className={styles.link}
                href={link}
                target="_blank"
                rel="noreferrer"
                title="Открыть сайт в новой вкладке"
              >
                {title}
              </a>
            ) : (
              title
            )}

            {githubLink && (
              <a
                className={styles.gitLink}
                href={githubLink}
                target="_blank"
                rel="noreferrer"
                title="Открыть GitHub репозиторий"
                aria-label={`GitHub репозиторий проекта ${title}`}
              >
                <GitHubIcon />
              </a>
            )}
          </h3>
          <div className={styles.description}>{description}</div>
          <div className={styles.tiles}>
            {techStack.map(techName => {
              const techIcon = getTechIcon(techName)
              return techIcon ? (
                <TileWrapper
                  key={techIcon.label}
                  variant="pill"
                  pillHeight={PILL_HEIGHT}
                  aria-label={techIcon.alt}
                  title={techIcon.alt}
                >
                  <img className={styles.tileImg} src={techIcon.src} alt={techIcon.alt} />
                  {techIcon.label}
                </TileWrapper>
              ) : null
            })}
          </div>
        </div>
      </SplitCard>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'
