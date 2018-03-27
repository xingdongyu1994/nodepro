import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { makeRootReducer } from './reduce'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    makeRootReducer(),
    applyMiddleware(sagaMiddleware),
  )
  sagaMiddleware.run(rootSaga)
  return store
}
