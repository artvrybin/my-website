import type { Contact } from '@/types/site'
import iconEmail from '@assets/icons/icon-email.svg'
import iconTelegram from '@assets/icons/icon-telegram.svg'
import iconGithub from '@assets/icons/icon-github.svg'

export const contacts: readonly Contact[] = [
  { label: 'Email', url: 'mailto:artvrybin@gmail.com', kind: 'email', icon: iconEmail, target: '_blank', rel: 'noreferrer' },
  { label: 'Telegram', url: 'https://t.me/temery4', kind: 'telegram', icon: iconTelegram, target: '_blank', rel: 'noreferrer' },
  { label: 'GitHub', url: 'https://github.com/artvrybin', kind: 'github', icon: iconGithub, target: '_blank', rel: 'noreferrer' },
] as const


