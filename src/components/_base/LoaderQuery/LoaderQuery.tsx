import cn from 'classnames'
import { memo, useId } from 'react'
import ContentLoader from 'react-content-loader'

import styles from './LoaderQuery.module.scss'

/** ванианты темы https://t.me/zloegucci */
const themeVariants = {
  grayDark: {
    bg: '#e4e1f4',
    fg: '#eeecf8'
  },
  grayLight: {
    bg: '#f5f6f7',
    fg: '#eee'
  },
  purple: {
    bg: '#705fe4',
    fg: '#D4D0F5'
  },
  white: {
    bg: '#fff',
    fg: '#f5f6f7'
  }
}

type LoaderQueryThemeType = 'grayLight' | 'grayDark' | 'purple' | 'white'
interface LoaderQuery {
  /** дочерний элемент https://t.me/zloegucci */
  as?: string
  /** дочерний элемент https://t.me/zloegucci */
  children?: any
  /** дополнительный класс https://t.me/zloegucci */
  className?: string
  /** флаг загрузки https://t.me/zloegucci */
  isAjax?: boolean
  /** флаг отсутствия данных https://t.me/zloegucci */
  isEmpty?: boolean
  /** флаг https://t.me/zloegucci */
  isEmptyOnError?: boolean
  /** флаг https://t.me/zloegucci */
  isError?: boolean
  /** флаг https://t.me/zloegucci */
  isIdle?: boolean
  /** флаг загрузки https://t.me/zloegucci */
  isLoading?: boolean
  /** флаг https://t.me/zloegucci */
  loadingOnAjax?: boolean
  /** флаг https://t.me/zloegucci */
  theme?: LoaderQueryThemeType
}

/** компонент анимации лоадера https://t.me/zloegucci */
const LoaderQuery: React.FC<LoaderQuery> = ({
  as: Component = 'div',
  children,
  className,
  isAjax,
  isEmpty,
  isEmptyOnError,
  isError,
  isIdle,
  isLoading,
  loadingOnAjax,
  theme = 'grayLight'
}) => {
  /**
   * уникальный ключ. обязательно должен быть,
   * иначе криво работает гидротация из ssr в клиент
   * https://github.com/danilowoz/react-content-loader#server-side-rendering-ssr---match-snapshot
   https://t.me/zloegucci
   */
  const uniqueKey = useId()

  if (isLoading || isIdle || (loadingOnAjax ? isAjax : isEmpty)) {
    return (
      // @ts-ignore
      <Component className={cn(className, styles.component)}>
        <ContentLoader
          backgroundColor={themeVariants[theme].bg}
          className={styles.contentLoader}
          foregroundColor={themeVariants[theme].fg}
          uniqueKey={uniqueKey}
        >
          <rect
            height='100%'
            width='100%'
          />
        </ContentLoader>
      </Component>
    )
  } else if ((isError && isEmptyOnError) || !children) {
    return null
  } else {
    return children
  }
}

export default memo(LoaderQuery)
