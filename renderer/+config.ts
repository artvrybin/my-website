import vikeReact from 'vike-react/config'
import type { Config } from 'vike/types'

export default {
  extends: vikeReact,
  prerender: true,
  // Устанавливаем язык документа
  htmlAttributes: {
    lang: 'ru'
  }
} satisfies Config
