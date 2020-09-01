import {Action} from 'redux'
import {GithubApiResponse} from 'src/models/github-api-response.model'
import {GithubIssue} from 'src/models/github-issue.model'
import {GithubRepository} from 'src/models/github-repository.model'
import {GithubUser} from 'src/models/github-user.model'

export type SearchResults<T> = {[query: string]: GithubApiResponse<T>}
export type SearchType = 'users' | 'repositories' | 'issues'

export interface GithubState {
  type: SearchType
  query: string
  users: SearchResults<GithubUser>
  repositories: SearchResults<GithubRepository>
  issues: SearchResults<GithubIssue>
  isLoading: boolean
  error: string | null
}

export interface GithubAction<T = Partial<GithubState>>
  extends Action<GithubActionTypes> {
  payload?: T
}

export enum GithubActionTypes {
  SET_GITHUB_STATE = '[GITHUB] SET_GITHUB_STATE',
  GET_USERS_REQUEST = '[GITHUB] GET_USERS_REQUEST',
  GET_USERS_SUCCESS = '[GITHUB] GET_USERS_SUCCESS',
  GET_USERS_FAILURE = '[GITHUB] GET_USERS_FAILURE',
  GET_REPOSITORIES_REQUEST = '[GITHUB] GET_REPOSITORIES_REQUEST',
  GET_REPOSITORIES_SUCCESS = '[GITHUB] GET_REPOSITORIES_SUCCESS',
  GET_REPOSITORIES_FAILURE = '[GITHUB] GET_REPOSITORIES_FAILURE',
  GET_ISSUES_REQUEST = '[GITHUB] GET_ISSUES_REQUEST',
  GET_ISSUES_SUCCESS = '[GITHUB] GET_ISSUES_SUCCESS',
  GET_ISSUES_FAILURE = '[GITHUB] GET_ISSUES_FAILURE',
  CHANGE_SEARCH_TYPE = '[GITHUB] CHANGE_SEARCH_TYPE',
  CHANGE_SEARCH_QUERY = '[GITHUB] CHANGE_SEARCH_QUERY',
  CLEAR_SEARCH_QUERY = '[GITHUB] CLEAR_SEARCH_QUERY'
}
