import { memo } from 'react'
import styles from './PortfolioSection.module.scss'
import { useLightbox } from '@lib/hooks/useLightbox.ts'
import { Lightbox } from '../ui/Lightbox'
import { ProjectCard } from './ProjectCard'
import projectImage from '@assets/images/project-image-0.png'

export const PortfolioSection = memo(() => {
  const { lightbox, openLightbox, closeLightbox } = useLightbox()

  // Временные данные для отображения пока не обновим структуру данных
  const projectsToDisplay = [
    {
      title: 'Pictorial',
      date: 'Сентябрь 2024',
      description:
        'Портал для обмена контентом — веб-приложение для общения, публикации материалов и взаимодействия между пользователями в рамках онлайн-сообщества.',
      image: projectImage,
      imageAlt: 'Скриншот проекта Pictorial',
      link: 'https://pictorial.work/',
      githubLink: 'https://github.com/username/repo',
      techStack: [
        'Next.js',
        'Sass',
        'SCSS',
        'Redux Toolkit',
        'React Redux',
        'React Hook Form',
        'I18n',
        'Stripe',
        'Socket.io',
      ],
    },
    {
      title: 'Musicfun',
      date: 'Март 2024',
      description:
        'Музыкальная платформа для прослушивания треков с современным интерфейсом и продвинутым функционалом управления плейлистами.',
      image: projectImage,
      imageAlt: 'Скриншот проекта Musicfun',
      link: 'https://musicfun-demo.vercel.app/',
      githubLink: 'https://github.com/username/musicfun',
      techStack: [
        'Vite',
        'TypeScript',
        'React',
        'React Router',
        'Redux',
        'Redux Toolkit',
        'Redux Persist',
        'Formik',
        'Yup',
        'PostCSS',
        'Vitest',
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
