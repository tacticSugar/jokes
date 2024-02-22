import { Joke } from '@/src/api/useSearchJokes/_types'
import type { FC } from 'react'
import cn from 'classnames'

import styles from './JokesCard.module.scss'

const JokesCard: FC<Pick<Joke, 'value' | 'created_at' | 'id' | 'url'>> = ({
  value,
  created_at,
  id,
  url,
}) => {
  return (
    value && (
      <a href={url} className={styles.jokesCard} target="_blank">
        <p className={cn(styles.jokeValue, 'max-lines-2')}>{value}</p>
        <p className={styles.jokeDetails}>
          <span>{id}</span>
          <span>{created_at}</span>
        </p>
      </a>
    )
  )
}

export default JokesCard
