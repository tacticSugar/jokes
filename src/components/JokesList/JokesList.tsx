import useSearchJokes from '@/src/api/useSearchJokes/useSearchJokes'
import { useRouter } from 'next/router'
import React from 'react'
import JokesCard from './JokesCard/JokesCard'

import styles from './JokesList.module.scss'
import LoaderQuery from '../_base/LoaderQuery/LoaderQuery'
import times from '@/src/lib/times'
import { useActions } from '@/src/lib/useActions'

const JokesList = () => {
  /** устанавливает счетчик */
  const { setCount } = useActions()
  /** роутер */
  const router = useRouter()
  /** достает данные */
  const { data, isLoading } = useSearchJokes({
    query: router?.query?.query as string,
  })
  if (!data && !isLoading) return null

  setCount({ count: data?.total })

  return (
    <ul className={styles.jokesList}>
      {isLoading
        ? times(2).map(() => <LoaderQuery isLoading={isLoading} />)
        : data?.result.map((joke) => <JokesCard {...joke} />)}
      {!data?.total && !isLoading && <span>No jokes here</span>}
    </ul>
  )
}

export default JokesList
