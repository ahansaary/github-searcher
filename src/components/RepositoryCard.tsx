import moment from 'moment'
import React from 'react'
import {GithubRepository} from 'src/models/github-repository.model'

type Props = {
  repository: GithubRepository
}

const RepositoryCard = ({repository}: Props) => {
  return (
    <div className="c-search-results__card">
      <img src={repository.owner.avatar_url} alt="User avatar" />
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{repository.name}</td>
          </tr>
          <tr>
            <th>Author:</th>
            <td>
              <a
                href={repository.owner.html_url}
                target="_blank"
                rel="noopener noreferrer">
                {repository.owner.login}
              </a>
            </td>
          </tr>
          <tr>
            <th>Stars:</th>
            <td>{repository.stargazers_count}</td>
          </tr>
          <tr>
            <th>Watchers:</th>
            <td>{repository.watchers_count}</td>
          </tr>
          <tr>
            <th>Forks:</th>
            <td>{repository.forks_count}</td>
          </tr>
          <tr>
            <th>Open issues:</th>
            <td>{repository.open_issues_count}</td>
          </tr>
          <tr>
            <th>Last update:</th>
            <td title={moment(repository.updated_at).format('LLL')}>
              {moment(repository.updated_at).fromNow()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RepositoryCard
