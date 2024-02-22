import { Provider } from 'react-redux'
import '@/styles/globals.css'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Fira_Sans } from 'next/font/google'
import { useState } from 'react'
import { store } from '@/src/store/store'

const firaSans = Fira_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  /** queryClient */
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: Infinity,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Provider store={store}>
          <main className={firaSans.className}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
