import React from 'react'
import GithubSearcher from './components/GithubSearcher'
import SearchResults from './components/SearchResults'

function App() {
  return (
    <div className="c-app__wrapper">
      <GithubSearcher />
      <SearchResults />
    </div>
  )
}

export default App
