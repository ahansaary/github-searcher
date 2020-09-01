import {Reducer} from 'redux'
import {GithubApiResponse} from 'src/models/github-api-response.model'
import {GithubIssue} from 'src/models/github-issue.model'
import {GithubRepository} from 'src/models/github-repository.model'
import {GithubUser} from 'src/models/github-user.model'
import {GithubAction, GithubActionTypes as GITHUB, GithubState} from './types'

const initialState: GithubState = {
  type: 'users',
  query: '',
  users: {},
  repositories: {},
  issues: {},
  isLoading: false,
  error: null
}

const setGithubState = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...initialState,
    ...state,
    ...action.payload
  }
}

const getUsersRequest = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: true,
    error: null
  }
}

const getUsersSuccess = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  const {payload} = action
  const searchResults = payload as GithubApiResponse<GithubUser>

  return {
    ...state,
    users: {
      ...state.users,
      [state.query]: searchResults
    },
    isLoading: false,
    error: null
  }
}

const getUsersFailure = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: false
  }
}

const getRepositoriesRequest = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: true,
    error: null
  }
}

const getRepositoriesSuccess = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  const {payload} = action
  const searchResults = payload as GithubApiResponse<GithubRepository>

  return {
    ...state,
    repositories: {
      ...state.repositories,
      [state.query]: searchResults
    },
    isLoading: false,
    error: null
  }
}

const getRepositoriesFailure = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: false
  }
}

const getIssuesRequest = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: true,
    error: null
  }
}

const getIssuesSuccess = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  const {payload} = action
  const searchResults = payload as GithubApiResponse<GithubIssue>

  return {
    ...state,
    issues: {
      ...state.issues,
      [state.query]: searchResults
    },
    isLoading: false,
    error: null
  }
}

const getIssuesFailure = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload,
    isLoading: false
  }
}

const changeSearchType = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload
  }
}

const changeSearchQuery = (
  state: GithubState,
  action: GithubAction
): GithubState => {
  return {
    ...state,
    ...action.payload
  }
}

const clearSearchQuery = (state: GithubState): GithubState => {
  return {
    ...state,
    query: ''
  }
}

const githubReducer: Reducer<GithubState, GithubAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GITHUB.SET_GITHUB_STATE:
      return setGithubState(state, action)
    case GITHUB.GET_USERS_REQUEST:
      return getUsersRequest(state, action)
    case GITHUB.GET_USERS_SUCCESS:
      return getUsersSuccess(state, action)
    case GITHUB.GET_USERS_FAILURE:
      return getUsersFailure(state, action)
    case GITHUB.GET_REPOSITORIES_REQUEST:
      return getRepositoriesRequest(state, action)
    case GITHUB.GET_REPOSITORIES_SUCCESS:
      return getRepositoriesSuccess(state, action)
    case GITHUB.GET_REPOSITORIES_FAILURE:
      return getRepositoriesFailure(state, action)
    case GITHUB.GET_ISSUES_REQUEST:
      return getIssuesRequest(state, action)
    case GITHUB.GET_ISSUES_SUCCESS:
      return getIssuesSuccess(state, action)
    case GITHUB.GET_ISSUES_FAILURE:
      return getIssuesFailure(state, action)
    case GITHUB.CHANGE_SEARCH_TYPE:
      return changeSearchType(state, action)
    case GITHUB.CHANGE_SEARCH_QUERY:
      return changeSearchQuery(state, action)
    case GITHUB.CLEAR_SEARCH_QUERY:
      return clearSearchQuery(state)
    default:
      return state
  }
}

export default githubReducer
