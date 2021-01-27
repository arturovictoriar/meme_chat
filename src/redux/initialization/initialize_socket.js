// import modules
import setupSocket from '../../sockets'
import handleNewMessage from '../sagas'
import { sagaMiddleware, store } from './initialize_state';

// user name of the user client server chat
// make the username public
export let userName = "";

/**
 * initilialize the communition to the chat server, run the saga and
 * make the function public
 * @param {string} username username
 */
export const getInChat = (username) => {
    userName = username
    // Setup the sockect with dispatch function and the username
    const socket = setupSocket(store.dispatch, username)
    // Initilize the saga middleware using the socket and the usename
    sagaMiddleware.run(handleNewMessage, { socket, username })
}
