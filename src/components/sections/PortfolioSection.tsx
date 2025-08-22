import { memo } from 'react'
import styles from './PortfolioSection.module.scss'
import { useLightbox } from '@lib/hooks/useLightbox.ts'
import { Lightbox } from '../ui/Lightbox'
import { ProjectCard } from './ProjectCard'
import pictorialImage from '@assets/images/pictorial-project-image.png'
import mfImage from '@assets/images/mf-project-image.png'

export const PortfolioSection = memo(() => {
  const { lightbox, openLightbox, closeLightbox } = useLightbox()

  // Временные данные для отображения пока не обновим структуру данных
  const projectsToDisplay = [
    {
      title: 'Musicfun',
      date: 'Июнь 2025',
      description:
        'Участие в командной разработке Open Source-проекта в сфере онлайн-образования..',
      image: mfImage,
      imageAlt: 'Скриншот проекта Musicfun',
      link: 'https://app.musicfun.dev/',
      githubLink: 'https://github.com/it-incubator/musicfun-react-all-stacks',
      techStack: [
        'React',
        'TypeScript',
        'Redux Toolkit',
        'React Redux',
        'Vite',
        'React Router',
        'React Hook Form',
        'Socket.io',
        'SCSS',
      ],
    },
    {
      title: 'Pictorial',
      date: 'Сентябрь 2024',
      description:
        'Портал для обмена контентом — веб-приложение для общения, публикации материалов и взаимодействия между пользователями в рамках сообщества.',
      image: pictorialImage,
      imageAlt: 'Скриншот проекта Pictorial',
      link: 'https://pictorial.work/',
      githubLink: 'https://github.com/artvrybin/pictorial-project',
      techStack: [
        'Next.js',
        'SCSS',
        'Redux Toolkit',
        'React Redux',
        'React Hook Form',
        'I18n',
        'Stripe',
        'Socket.io',
      ],
    },
  ]

  return (
    <section id="portfolio" className={`section ${styles.root}`}>
      <div className="container">
        <h2 className={styles.title}>
          Мои <span className="accentWord">Работы</span>
        </h2>
        <div className={styles.list}>
          {projectsToDisplay.map((project, index) => (
            <ProjectCard
              key={`${project.title}-${index}`}
              title={project.title}
              date={project.date}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              link={project.link}
              githubLink={project.githubLink}
              techStack={project.techStack}
              onImageClick={openLightbox}
            />
          ))}
        </div>
        {lightbox.isOpen && lightbox.src && (
          <Lightbox
            src={lightbox.src}
            caption={lightbox.caption}
            onClose={closeLightbox}
          />
        )}
      </div>
    </section>
  )
})

PortfolioSection.displayName = 'PortfolioSection'
