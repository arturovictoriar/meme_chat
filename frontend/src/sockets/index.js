// Import modules
import *  as types from '../redux/constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../redux/actions'
import io from "socket.io-client";

/**
 * Conect redux with the sockets for updating the entry and outer messages
 * @param {Function} dispatch trigger to save the data in redux
 * @param {String} username user name
 */
const setupSocket = (dispatch, username) => {
	// replace for heroku const socket = new WebSocket('wss://backend-chating.herokuapp.com')
	const ENDPOINT = 'http://localhost:5000';
	const socket = io(ENDPOINT);
	/**
	 * on a new user send the username to the server
	 */
	socket.on('connect', () => {
		socket.emit('addUser', { username }, (error) => {
			if (error) {
				alert(error);
			}
		})
	})

	/**
	 * On a new change evaluate and set the state
	 * @param {String} event new change
	 */
	socket.on('receiveMessage', (data, callback) => {
		dispatch(messageReceived(data.message, data.author, data.date))
	})

	socket.on('usersList', (data, callback) => {
		dispatch(populateUsersList(data.users))
	})

	return socket
}
// return the sockect with redux
export default setupSocket
