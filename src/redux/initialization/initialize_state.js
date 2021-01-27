// Import libraries
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// Import modules
import reducers from '../reducers'

// Create the saga middleware
export const sagaMiddleware = createSagaMiddleware()
// Create the store with the reducer and the middleware
export const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)
