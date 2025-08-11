import { type ElementType } from 'react'
import { SplitCard, type SplitCardProps } from './SplitCard'

export function SectionCard<T extends ElementType = 'article'>(props: SplitCardProps<T>) {
  return <SplitCard {...props} />
}


