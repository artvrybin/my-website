import { type ElementType, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import styles from './SplitCard.module.scss'

type BaseProps = {
  left?: ReactNode
  children?: ReactNode
  className?: string
  frameLeft?: boolean
  leftWidth?: number // px
  aspect?: string // CSS aspect-ratio value, e.g. '399 / 320'
}

export type SplitCardProps<T extends ElementType> = BaseProps & {
  as?: T
} & Omit<ComponentPropsWithoutRef<T>, keyof BaseProps | 'as'>

export function SplitCard<T extends ElementType = 'article'>(
  { as, left, children, className, frameLeft = false, leftWidth = 399, aspect = '399 / 320', ...rest }: SplitCardProps<T>
) {
  const Comp = (as ?? 'article') as ElementType
  type SplitStyleVars = React.CSSProperties & {
    ['--split-left-width']?: string
    ['--split-aspect']?: string
  }
  const styleVars: SplitStyleVars = {
    '--split-left-width': `${leftWidth}px`,
    '--split-aspect': aspect,
  }
  return (
    <Comp className={`${styles.root} ${styles.content}${className ? ` ${className}` : ''}`} style={styleVars} {...rest}>
      {left && (
        <div className={`${styles.left}${frameLeft ? ` ${styles.leftFrame}` : ''}`}>
          {left}
        </div>
      )}
      {children && (
        <div className={styles.right}>
          {children}
        </div>
      )}
    </Comp>
  )
}

export const SplitCardAspect = ({ children }: { children?: ReactNode }) => (
  <div className={styles.leftAspect} aria-hidden={children ? undefined : true}>
    {children}
  </div>
)


