import React from 'react'
import {
  useGithubIsLoadingSelector,
  useGithubIssuesSelector,
  useGithubRepositoriesSelector,
  useGithubSearchQuerySelector,
  useGithubSearchTypeSelector,
  useGithubUsersSelector
} from 'src/store/github/selectors'
import IssueCard from './IssueCard'
import RepositoryCard from './RepositoryCard'
import UserCard from './UserCard'

const SearchResults = () => {
  const type = useGithubSearchTypeSelector()
  const query = useGithubSearchQuerySelector()
  const isLoading = useGithubIsLoadingSelector()

  if (query.length < 3) return <></>
  if (isLoading)
    return <div className="c-search-results__loading">Loading ...</div>

  return (
    <div className="c-search-results__wrapper">
      {type === 'users' && <Users />}
      {type === 'repositories' && <Repositories />}
      {type === 'issues' && <Issues />}
    </div>
  )
}

const Users = () => {
  const query = useGithubSearchQuerySelector()
  const users = useGithubUsersSelector(query)

  return (
    <>
      {users?.items.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  )
}

const Repositories = () => {
  const query = useGithubSearchQuerySelector()
  const repositories = useGithubRepositoriesSelector(query)

  return (
    <>
      {repositories?.items.map(repo => (
        <RepositoryCard key={repo.id} repository={repo} />
      ))}
    </>
  )
}

const Issues = () => {
  const query = useGithubSearchQuerySelector()
  const issues = useGithubIssuesSelector(query)

  return (
    <>
      {issues?.items.map(issue => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </>
  )
}

export default SearchResults
