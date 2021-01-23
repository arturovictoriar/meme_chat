// Import libraries
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// Import modules
import setupSocket from '../../sockets'
import reducers from '../reducers'
import handleNewMessage from '../sagas'
import username from '../../utils/name'
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Create the store with the reducer and the middleware
const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)
// Setup the sockect with dispatch function and the username
const socket = setupSocket(store.dispatch, username)
// Initilize the saga middleware using the socket and the usename
sagaMiddleware.run(handleNewMessage, {socket, username})
// export the store
export default store;