import type { AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react'
import styles from './TileWrapper.module.scss'

type TileWrapperProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'circle' | 'pill'
  circleSize?: number // px, e.g. 64 -> 64x64 circle
  pillHeight?: number // px, e.g. 40 -> auto-width x 40
}

export function TileWrapper({ children, className, variant = 'circle', circleSize = 64, pillHeight = 40, style, ...props }: TileWrapperProps) {
  const styleVars: CSSProperties & {
    ['--tile-w']?: string
    ['--tile-h']?: string
    ['--tile-p']?: string
    ['--tile-radius']?: string
  } = {}

  if (variant === 'circle') {
    const size = `${circleSize}px`
    styleVars['--tile-w'] = size
    styleVars['--tile-h'] = size
    styleVars['--tile-radius'] = '999px'
    styleVars['--tile-p'] = '0'
  } else {
    styleVars['--tile-w'] = 'auto'
    styleVars['--tile-h'] = `${pillHeight}px`
    styleVars['--tile-radius'] = '999px'
    styleVars['--tile-p'] = '0 12px'
  }

  return (
    <a {...props} className={`${styles.root} ${styles[variant]}${className ? ` ${className}` : ''}`} style={{ ...styleVars, ...style }}>
      <span>{children}</span>
    </a>
  )
}


