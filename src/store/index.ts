import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {PersistConfig, persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import githubReducer from './github/reducer'
import {GithubState} from './github/types'
import {rootSagas} from './sagas'

/*
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const githubPersistConfig: PersistConfig<GithubState> = {
  storage,
  key: 'github'
}

const rootReducer = combineReducers({
  github: persistReducer(githubPersistConfig, githubReducer)
})

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  const {logger} = require('redux-logger')

  middlewares.push(logger)
}

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSagas)

const persistor = persistStore(store)

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */

export {store, persistor}
