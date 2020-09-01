import {AxiosResponse} from 'axios'
import {call, delay, put, select} from 'redux-saga/effects'
import {GithubApiResponse} from 'src/models/github-api-response.model'
import {GithubIssue} from 'src/models/github-issue.model'
import {GithubRepository} from 'src/models/github-repository.model'
import {GithubUser} from 'src/models/github-user.model'
import Api from 'src/services/api'
import {AppState} from '..'
import {
  GithubAction,
  GithubActionTypes as GITHUB,
  SearchResults,
  SearchType
} from './types'

export function* getUsersWorker(action: GithubAction) {
  try {
    type ResponseType = AxiosResponse<GithubApiResponse<GithubUser>>
    type SuccessActionType = GithubAction<GithubApiResponse<GithubUser>>

    const query = action.payload?.query as string
    const res = yield call(Api.get, '/users', {params: {q: query}})

    yield put<SuccessActionType>({
      type: GITHUB.GET_USERS_SUCCESS,
      payload: (res as ResponseType).data
    })
  } catch (error) {
    yield put<GithubAction>({type: GITHUB.GET_USERS_FAILURE, payload: {error}})
  }
}

export function* getRepositoriesWorker(action: GithubAction) {
  try {
    type ResponseType = AxiosResponse<GithubApiResponse<GithubRepository>>
    type SuccessActionType = GithubAction<GithubApiResponse<GithubRepository>>

    const query = action.payload?.query as string
    const res = yield call(Api.get, '/repositories', {params: {q: query}})

    yield put<SuccessActionType>({
      type: GITHUB.GET_REPOSITORIES_SUCCESS,
      payload: (res as ResponseType).data
    })
  } catch (error) {
    yield put<GithubAction>({
      type: GITHUB.GET_REPOSITORIES_FAILURE,
      payload: {error}
    })
  }
}

export function* getIssuesWorker(action: GithubAction) {
  try {
    type ResponseType = AxiosResponse<GithubApiResponse<GithubIssue>>
    type SuccessActionType = GithubAction<GithubApiResponse<GithubIssue>>

    const query = action.payload?.query as string
    const res = yield call(Api.get, '/issues', {params: {q: query}})

    yield put<SuccessActionType>({
      type: GITHUB.GET_ISSUES_SUCCESS,
      payload: (res as ResponseType).data
    })
  } catch (error) {
    yield put<GithubAction>({type: GITHUB.GET_ISSUES_FAILURE, payload: {error}})
  }
}

export function* changeSearchQueryWorker(action: GithubAction) {
  // debounce by 300ms
  yield delay(300)

  const query = action.payload?.query as string
  const type: SearchType = yield select((state: AppState) => state.github.type)
  const users: SearchResults<GithubUser> = yield select(
    (state: AppState) => state.github.users
  )
  const repositories: SearchResults<GithubRepository> = yield select(
    (state: AppState) => state.github.repositories
  )
  const issues: SearchResults<GithubIssue> = yield select(
    (state: AppState) => state.github.issues
  )

  if (query.length >= 3) {
    if (type === 'users' && !users[query]) {
      yield put<GithubAction>({
        type: GITHUB.GET_USERS_REQUEST,
        payload: {query}
      })
    }

    if (type === 'repositories' && !repositories[query]) {
      yield put<GithubAction>({
        type: GITHUB.GET_REPOSITORIES_REQUEST,
        payload: {query}
      })
    }

    if (type === 'issues' && !issues[query]) {
      yield put<GithubAction>({
        type: GITHUB.GET_ISSUES_REQUEST,
        payload: {query}
      })
    }
  }
}

export function* changeSearchTypeWorker() {
  const query: string = yield select((state: AppState) => state.github.query)

  if (query.length >= 3) {
    yield put<GithubAction>({
      type: GITHUB.CHANGE_SEARCH_QUERY,
      payload: {query}
    })
  }
}
