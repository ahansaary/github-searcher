import React from 'react'
import {GithubIssue} from 'src/models/github-issue.model'

type Props = {
  issue: GithubIssue
}

const IssueCard = ({issue}: Props) => {
  return <div className="c-search-results__card">{JSON.stringify(issue)}</div>
}

export default IssueCard
