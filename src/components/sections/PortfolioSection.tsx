import { memo } from 'react'
import styles from './PortfolioSection.module.scss'
import { useLightbox } from '@lib/hooks/useLightbox.ts'
import { Lightbox } from '../ui/Lightbox'
import { ProjectCard } from './ProjectCard'
import pictorialImage from '@assets/images/pictorial-project-image.png'
import mfImage from '@assets/images/mf-project-image.png'
import uiImage from '@assets/images/ui-kit-project-image.png'
import admImage from '@assets/images/pictorialSA-project-image.png'

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
        'TypeScript',
        'Redux Toolkit',
        'React Hook Form',
        'I18n',
        'Stripe',
        'Socket.io',
        'SCSS',
      ],
    },
    {
      title: 'Pictorial SuperAdmin',
      date: 'Июнь 2024',
      description:
        'Админка — полнофункциональная система администрирования с управлением пользователями, модерацией контента и аналитикой платежей.',
      image: admImage,
      imageAlt: 'Скриншот админ-панели Pictorial SuperAdmin',
      link: 'https://pictorial-superadmin.vercel.app',
      githubLink: 'https://github.com/artvrybin/pictorial-superadmin',
      techStack: [
        'Next.js',
        'TypeScript',
        'Apollo Client',
        'GraphQL',
        'Redux Toolkit',
        'TailwindCSS',
        'Next-intl',
      ],
    },
    {
      title: 'UI Components Library',
      date: 'Январь 2024',
      description:
        'UI - kit переиспользуемых React компонентов — NPM-пакет с документацией в Storybook и поддержкой accessibility.',
      image: uiImage,
      imageAlt: 'Скриншот библиотеки UI компонентов',
      link: 'https://components-lib-two.vercel.app',
      githubLink: 'https://github.com/artvrybin/components-lib',
      techStack: [
        'React',
        'TypeScript',
        'Vite',
        'Storybook',
        'Radix UI',
        'TailwindCSS',
        'SCSS',
        'Vitest',
        'React Testing Library',
        'Rollup',
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
