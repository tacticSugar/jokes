/** базовое апи */
export const BASE_URL = 'https://api.chucknorris.io/jokes'

// api
export const SEARCH_API = '/search' // поиск

/** true если код выполняется в браузере */
export const IS_BROWSER = typeof window !== 'undefined'
/** true если код выполняется в сторибуке */
export const ENV_IS_STORYBOOK = process.env.STORYBOOK === 'true'
