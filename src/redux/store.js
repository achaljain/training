import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Immutable from 'seamless-immutable'
import rootReducer from './reducers'
import sagas from './sagas'

let InitialState = Immutable({})

const sagaMiddleware = createSagaMiddleware()

// middlewares and store enhancers
const middlewares = [
    sagaMiddleware, // for running saga
]

const enhancers = [
    applyMiddleware(...middlewares),
]

let store = createStore(
    rootReducer,
    InitialState,
    compose(...enhancers)
)

// extensions
store.runSaga = sagaMiddleware.run

// run sagas
sagas.forEach(saga => store.runSaga(saga))

export default store