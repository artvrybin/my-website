import type { Contact } from '@/types/site'

export const contacts: readonly Contact[] = [
  { label: 'Email', url: 'mailto:artvrybin@gmail.com', kind: 'email' },
  { label: 'Telegram', url: 'https://t.me/temery4', kind: 'telegram' },
  { label: 'GitHub', url: 'https://github.com/temery4', kind: 'github' },
  { label: 'Телефон', url: 'tel:+79203429945', kind: 'phone' },
] as const


