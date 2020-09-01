import {Dispatch} from 'redux'
import {GithubApiResponse} from 'src/models/github-api-response.model'
import {GithubIssue} from 'src/models/github-issue.model'
import {GithubRepository} from 'src/models/github-repository.model'
import {GithubUser} from 'src/models/github-user.model'
import {action} from 'typesafe-actions'
import {
  GithubAction,
  GithubActionTypes as GITHUB,
  GithubState,
  SearchType
} from './types'

export class GithubDispatcher {
  private readonly dispatch: Dispatch<GithubAction>

  constructor(dispatch: Dispatch<GithubAction>) {
    this.dispatch = dispatch
  }

  /**
   * Shallow merge new state with current auth reducer state and initial state
   * Useful to update persistor state when reducer has new params
   *
   * @param state params of the app reducer
   */
  setGithubState = (state?: Partial<GithubState>) =>
    this.dispatch(action(GITHUB.SET_GITHUB_STATE, state))

  /**
   * Users Actions
   */

  getUsersRequest = (query: string) =>
    this.dispatch(action(GITHUB.GET_USERS_REQUEST, {query}))

  getUsersSuccess = (users: GithubApiResponse<GithubUser>) =>
    this.dispatch(
      action<GITHUB.GET_USERS_SUCCESS, any>(GITHUB.GET_USERS_SUCCESS, users)
    )

  getUsersFailure = (error: string) =>
    this.dispatch(action(GITHUB.GET_USERS_FAILURE, {error}))

  /**
   * Repositories Actions
   */

  getRepositoriesRequest = (query: string) =>
    this.dispatch(action(GITHUB.GET_REPOSITORIES_REQUEST, {query}))

  getRepositoriesSuccess = (users: GithubApiResponse<GithubRepository>) =>
    this.dispatch(
      action<GITHUB.GET_REPOSITORIES_SUCCESS, any>(
        GITHUB.GET_REPOSITORIES_SUCCESS,
        users
      )
    )

  getRepositoriesFailure = (error: string) =>
    this.dispatch(action(GITHUB.GET_REPOSITORIES_FAILURE, {error}))

  /**
   * Issues Actions
   */

  getIssuesRequest = (query: string) =>
    this.dispatch(action(GITHUB.GET_ISSUES_REQUEST, {query}))

  getIssuesSuccess = (users: GithubApiResponse<GithubIssue>) =>
    this.dispatch(
      action<GITHUB.GET_ISSUES_SUCCESS, any>(GITHUB.GET_ISSUES_SUCCESS, users)
    )

  getIssuesFailure = (error: string) =>
    this.dispatch(action(GITHUB.GET_ISSUES_FAILURE, {error}))

  /**
   * Search Actions
   */

  changeSearchType = (type: SearchType) =>
    this.dispatch(action(GITHUB.CHANGE_SEARCH_TYPE, {type}))

  changeSearchQuery = (query: string) =>
    this.dispatch(action(GITHUB.CHANGE_SEARCH_QUERY, {query}))

  clearSearchQuery = () => this.dispatch(action(GITHUB.CLEAR_SEARCH_QUERY))
}
