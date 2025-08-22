import iconNextjs from '../assets/icons/icon-nextjs.svg'
import iconReactHookForm from '../assets/icons/icon-react-hook-form.svg'
import iconStripe from '../assets/icons/icon-stripe.svg'
import iconSass from '../assets/images/icons/sass.svg'
import iconScss from '../assets/images/icons/scss.svg'
import iconVite from '../assets/images/icons/vite.svg'
import iconTS from '../assets/images/icons/typescript.svg'
import iconReact from '../assets/images/icons/react.svg'
import iconReactRouter from '../assets/images/icons/react-router.svg'
import iconRedux from '../assets/images/icons/redux.svg'
import iconRTK from '../assets/images/icons/redux-toolkit.svg'
import iconReduxPersist from '../assets/images/icons/redux-persist.svg'
import iconFormik from '../assets/images/icons/formik.svg'
import iconYup from '../assets/images/icons/yup.svg'
import iconPostCSS from '../assets/images/icons/postcss.svg'
import iconVitest from '../assets/images/icons/vitest.svg'
import iconI18n from '../assets/icons/icon-i18n.svg'
import iconSocketio from '../assets/icons/icon-socketio.svg'

/**
 * Мапа иконок технологий для компонентов проектов.
 * Позволяет легко получить иконку по названию технологии.
 */
export const TECH_STACK_ICONS = {
  'Next.js': { src: iconNextjs, alt: 'Next.js' },
  'Sass': { src: iconSass, alt: 'Sass' },
  'SCSS': { src: iconScss, alt: 'SCSS' },
  'Redux Toolkit': { src: iconRTK, alt: 'Redux Toolkit' },
  'React Redux': { src: iconRedux, alt: 'React Redux' },
  'React Hook Form': { src: iconReactHookForm, alt: 'React Hook Form' },
  'I18n': { src: iconI18n, alt: 'I18n' },
  'Stripe': { src: iconStripe, alt: 'Stripe' },
  'Socket.io': { src: iconSocketio, alt: 'Socket.io' },
  'Vite': { src: iconVite, alt: 'Vite' },
  'TypeScript': { src: iconTS, alt: 'TypeScript' },
  'React': { src: iconReact, alt: 'React' },
  'React Router': { src: iconReactRouter, alt: 'React Router' },
  'Redux': { src: iconRedux, alt: 'Redux' },
  'Redux Persist': { src: iconReduxPersist, alt: 'Redux Persist' },
  'Formik': { src: iconFormik, alt: 'Formik' },
  'Yup': { src: iconYup, alt: 'Yup' },
  'PostCSS': { src: iconPostCSS, alt: 'PostCSS' },
  'Vitest': { src: iconVitest, alt: 'Vitest' },
  'RTK Query': { src: iconRTK, alt: 'RTK Query' },
  'Radix UI': { src: iconReact, alt: 'Radix UI' }, // используем React иконку для Radix
  'shadcn/ui': { src: iconReact, alt: 'shadcn/ui' }, // используем React иконку для shadcn
  'Storybook': { src: iconReact, alt: 'Storybook' }, // используем React иконку для Storybook
  'WebSocket': { src: iconSocketio, alt: 'WebSocket' }, // используем Socket.io иконку для WebSocket
  'REST': { src: iconReact, alt: 'REST' }, // используем React иконку для REST
} as const

export type TechStackKey = keyof typeof TECH_STACK_ICONS

/**
 * Получает иконку технологии по названию.
 * Возвращает объект с src, alt и label или null если иконка не найдена.
 */
export const getTechIcon = (name: string) => {
  const icon = TECH_STACK_ICONS[name as TechStackKey]
  return icon ? { ...icon, label: name } : null
}
