import { type FC } from 'react'
import styles from './JokesCount.module.scss'
import { useTypedSelector } from '@/src/lib/useTypedSelector'

const JokesCount: FC = () => {
  /** счетчик */
  const { count } = useTypedSelector((state) => state?.count)

  return (
    !!count && <span className={styles.jokesCount}>Total count: {count}</span>
  )
}

export default JokesCount
