import React from 'react'
import {GithubUser} from 'src/models/github-user.model'

type Props = {
  user: GithubUser
}

const UserCard = ({user}: Props) => {
  return (
    <div className="c-search-results__card">
      <img src={user.avatar_url} alt="User avatar" />
      <table>
        <tbody>
          <tr>
            <th>User Name:</th>
            <td>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </td>
          </tr>
          <tr>
            <th>Type:</th>
            <td>{user.type}</td>
          </tr>
          <tr>
            <th>Score:</th>
            <td>{user.score}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserCard
