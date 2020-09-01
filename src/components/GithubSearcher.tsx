import React from 'react'
import {useDispatch} from 'react-redux'
import logoImg from 'src/logo.png'
import {GithubDispatcher} from 'src/store/github/actions'
import {
  useGithubSearchQuerySelector,
  useGithubSearchTypeSelector
} from 'src/store/github/selectors'
import {SearchType} from 'src/store/github/types'

const GithubSearcher = () => {
  return (
    <div className="c-github-searcher__wrapper">
      <Header />
      <SearchForm />
    </div>
  )
}

const Header = () => {
  return (
    <div className="c-github-searcher__header">
      <img
        className="c-github-searcher__logo"
        src={logoImg}
        alt="github logo"
      />
      <div className="c-github-searcher__hero">
        <div className="c-github-searcher__title">GitHub Searcher</div>
        <div className="c-github-searcher__description">
          Search users or repositories below
        </div>
      </div>
    </div>
  )
}

const SearchForm = () => {
  const type = useGithubSearchTypeSelector()
  const query = useGithubSearchQuerySelector()
  const dispatch = useDispatch()
  const dispatcher = new GithubDispatcher(dispatch)

  return (
    <div className="c-github-searcher__form-wrapper">
      <input
        className="c-github-searcher__search-input"
        placeholder="Start typing to search .."
        onChange={e => dispatcher.changeSearchQuery(e.target.value)}
        value={query}
      />
      <select
        className="c-github-searcher__type-select"
        onChange={e =>
          dispatcher.changeSearchType(e.target.value as SearchType)
        }
        value={type}>
        <option value="users">Users</option>
        <option value="repositories">Repositories</option>
        <option value="issues">Issues</option>
      </select>
    </div>
  )
}

export default GithubSearcher
