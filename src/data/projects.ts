import type { Project } from '@/types/site'

export const projects: readonly Project[] = [
  {
    title: 'Веб‑платформа IP‑лицензирования',
    date: '2024',
    description:
      'Next.js 14, TypeScript, кастомные компоненты Radix UI/shadcn/ui, Storybook. Оптимизация состояния и API на RTK Query.',
    stack: ['Next.js', 'TypeScript', 'RTK Query', 'Radix UI', 'shadcn/ui', 'Storybook', 'SCSS'],
  },
  {
    title: 'Социальное медиа‑приложение (MVP)',
    date: '2023',
    description:
      'Роутинг React 18, управление состоянием, WebSocket‑подписки для лайв‑уведомлений.',
    stack: ['React', 'Redux Toolkit', 'WebSocket', 'REST'],
  },
]


