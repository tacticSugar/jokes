import useSearchJokes from '@/src/api/useSearchJokes/useSearchJokes'
import '@/styles/globals.css'
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Fira_Sans } from 'next/font/google'
import { useState } from 'react'
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
        <main className={firaSans.className}>
          <Component {...pageProps} />
        </main>
      </HydrationBoundary>
    </QueryClientProvider>
  )
}
