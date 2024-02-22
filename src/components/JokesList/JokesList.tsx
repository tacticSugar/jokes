import useSearchJokes from '@/src/api/useSearchJokes/useSearchJokes'
import { useRouter } from 'next/router'
import React from 'react'

const JokesList = () => {
  const router = useRouter()
  const { data, isLoading, isError } = useSearchJokes({
    query: router.query.query as string,
  })

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching jokes</p>}
      {data?.result.map((joke) => (
        <div key={joke.id}>{joke.value}</div>
      ))}
    </div>
  )
}

export default JokesList
