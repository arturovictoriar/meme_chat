import setupSocket from '../../sockets'
import handleNewMessage from '../sagas'
import { sagaMiddleware, store } from './initialize_state';
export let userName = "";

export const getInChat = (username) => {
    userName = username
    // Setup the sockect with dispatch function and the username
    const socket = setupSocket(store.dispatch, username)
    // Initilize the saga middleware using the socket and the usename
    sagaMiddleware.run(handleNewMessage, { socket, username })
}
