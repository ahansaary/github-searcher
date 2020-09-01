import {all} from 'redux-saga/effects'
import {githubWatchers} from './github/watchers'

export function* rootSagas() {
  const watchers = [...githubWatchers]

  yield all(watchers)
}
