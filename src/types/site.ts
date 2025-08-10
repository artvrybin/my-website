export type ContactKind = 'email' | 'telegram' | 'github' | 'phone' | 'link'

export type Contact = {
  label: string
  url: string
  kind: ContactKind
}

export type Project = {
  title: string
  date: string
  description: string
  stack: string[]
  link?: string
}

export type Experience = {
  company: string
  role: string
  city?: string
  from: string
  to?: string
  summary: string
}

export type SiteMeta = {
  name: string
  role: string
  city?: string
  bio: string
  introLines?: string[]
  ctaText?: string
  ctaHref?: string
  techStack?: string[]
}


