import { useRouter } from 'next/router'
import React, { useState, useEffect, memo, useRef } from 'react'
import styles from './SearchJokesWizard.module.scss'
import JokesCount from './JokesCount/JokesCount'
import NoSSR from '@/src/lib/NoSSR'
import { useActions } from '@/src/lib/useActions'

const SearchJokes = () => {
  /** устанавливает счетчик */
  const { setCount } = useActions()
  /** роутер */
  const router = useRouter()
  /** стейт для поиска */
  const [query, setQuery] = useState(router.query?.query as string)
  /** реф для фокуса */
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [router.query.query])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query?.length > 3) {
        router.push(
          {
            pathname: '/search',
            query: {
              query,
            },
          },
          undefined,
          { shallow: true }
        )
      }
      if (!query?.length) {
        setCount({ count: 0 })
        router.push('/search', undefined, { shallow: true })
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <div className={styles.searchJokes}>
      <input
        ref={inputRef}
        className={styles.searchJokesInput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search jokes..."
      />
      <NoSSR>
        <JokesCount />
      </NoSSR>
    </div>
  )
}

export default memo(SearchJokes)
