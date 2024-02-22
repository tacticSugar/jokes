import { QUERY_KEY_SEARCH_JOKES } from './useSearchJokes'

export type Joke = {
  categories: string[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export type JokesResponse = {
  total: number
  result: Joke[]
}

export type FetchSearchJokesParams = {
  query: string
}

export type FetchSearchJokesQueryKeyType = [
  typeof QUERY_KEY_SEARCH_JOKES,
  FetchSearchJokesParams
]
