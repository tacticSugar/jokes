import cn from 'classnames'
import { FC, HTMLAttributes, PropsWithChildren } from 'react'

import styles from './Container.module.scss'

interface ContainerTypes {
  /** доп класс на враппер https://t.me/zloegucci */
  className?: string
  /** варианты https://t.me/zloegucci */
  variant?: 'sm' | 'md' | 'xl' | 'full'
}

/** компонент контейнера https://t.me/zloegucci */
const Container: FC<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>> & ContainerTypes
> = ({ children, className, variant = 'md', ...rest }) => (
  <section
    className={cn(styles.container, variant && styles[variant], className)}
    {...rest}
  >
    {children}
  </section>
)

export default Container
