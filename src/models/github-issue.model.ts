import {GithubUser} from './github-user.model'

export interface GithubIssue {
  id: number
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  node_id: string
  number: number
  title: string
  user: GithubUser
  labels: any[]
  state: string
  locked: boolean
  assignee?: any
  assignees: any[]
  milestone: Milestone
  comments: number
  created_at: Date
  updated_at: Date
  closed_at?: any
  author_association: string
  active_lock_reason?: any
  body: string
  performed_via_github_app?: any
  score: number
}

export interface Milestone {
  id: number
  url: string
  html_url: string
  labels_url: string
  node_id: string
  number: number
  title: string
  description: string
  creator: GithubUser
  open_issues: number
  closed_issues: number
  state: string
  created_at: Date
  updated_at: Date
  due_on?: any
  closed_at?: any
}
