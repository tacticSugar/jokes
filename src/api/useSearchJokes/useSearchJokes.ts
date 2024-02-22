import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { axiosGet } from '../axiosInstances'
import { SEARCH_API } from '@/src/constants/constants'
import {
  FetchSearchJokesParams,
  FetchSearchJokesQueryKeyType,
  JokesResponse,
} from './_types'

/** ключ под которым записываем */
export const QUERY_KEY_SEARCH_JOKES = 'searchJokes'

/** функция запроса шуток*/
export const getJokes = async ({
  query,
}: FetchSearchJokesParams): Promise<JokesResponse> => {
  /** дата шуток */
  const { data } = await axiosGet.get<JokesResponse>(SEARCH_API, {
    params: {
      query,
    },
  })

  return data
}

/** хук запроса шуток через поиск */
const useSearchJokes = ({
  query,
}: FetchSearchJokesParams): UseQueryResult<JokesResponse, Error> =>
  useQuery<JokesResponse, Error, JokesResponse, FetchSearchJokesQueryKeyType>({
    enabled: !!query,
    queryFn: () => getJokes({ query }),
    queryKey: [QUERY_KEY_SEARCH_JOKES, { query }],
  })

export default useSearchJokes
