import { useRouter } from 'next/router'
import React, { useState, useEffect, memo } from 'react'
import styles from './SearchJokesWizard.module.scss'

const SearchJokes = () => {
  /** роутер */
  const router = useRouter()
  /** стейт для поиска */
  const [query, setQuery] = useState('')

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
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  return (
    <input
      className={styles.searchJokesInput}
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search jokes..."
    />
  )
}

export default memo(SearchJokes)
