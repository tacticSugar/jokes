import Container from '@/src/components/_base/Container/Container'
import JokesList from '@/src/components/JokesList/JokesList'
import SearchJokesWizard from '@/src/components/SearchJokesWizard/SearchJokesWizard'
import type { FC } from 'react'

const SearchPage: FC = () => {
  return (
    <Container>
      <SearchJokesWizard />
      <JokesList />
    </Container>
  )
}

export default SearchPage
