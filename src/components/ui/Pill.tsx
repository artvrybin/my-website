import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import styles from './Pill.module.scss'

type BaseProps = {
  children?: ReactNode
  withDot?: boolean
  className?: string
}

type PillProps<T extends ElementType> = BaseProps & {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps | 'as'>

export function Pill<T extends ElementType = 'article'>(
  { as, children, withDot = true, className, ...rest }: PillProps<T>
) {
  const Comp = (as ?? 'article') as ElementType
  return (
    <Comp className={`${styles.root}${className ? ` ${className}` : ''}`} {...rest}>
      {withDot && <span className={styles.dot} aria-hidden="true" />}
      <div className={styles.text}>{children}</div>
    </Comp>
  )
}


