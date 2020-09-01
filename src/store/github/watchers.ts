import {fork, ForkEffect, takeEvery, takeLatest} from 'redux-saga/effects'
import {GithubActionTypes as GITHUB} from './types'
import {
  changeSearchQueryWorker,
  changeSearchTypeWorker,
  getIssuesWorker,
  getRepositoriesWorker,
  getUsersWorker
} from './workers'

/**
 *  Spawns a `saga` on each action dispatched to the Store that matches `pattern`.
 */
function* getUsersWatcher() {
  yield takeEvery(GITHUB.GET_USERS_REQUEST, getUsersWorker)
}

function* getRepositoriesWatcher() {
  yield takeEvery(GITHUB.GET_REPOSITORIES_REQUEST, getRepositoriesWorker)
}

function* getIssuesWatcher() {
  yield takeEvery(GITHUB.GET_ISSUES_REQUEST, getIssuesWorker)
}

function* changeSearchQueryWatcher() {
  yield takeLatest(GITHUB.CHANGE_SEARCH_QUERY, changeSearchQueryWorker)
}

function* changeSearchTypeWatcher() {
  yield takeEvery(GITHUB.CHANGE_SEARCH_TYPE, changeSearchTypeWorker)
}

export const githubWatchers: ForkEffect[] = [
  fork(getUsersWatcher),
  fork(getRepositoriesWatcher),
  fork(getIssuesWatcher),
  fork(changeSearchQueryWatcher),
  fork(changeSearchTypeWatcher)
]
