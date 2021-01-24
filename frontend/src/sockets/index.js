// Import modules
import *  as types from '../redux/constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../redux/actions'

/**
 * Conect redux saga with the sockets
 * @param {Function} dispatch trigger
 * @param {String} username user name
 */
const setupSocket = (dispatch, username) => {
	// replace for heroku const socket = new WebSocket('wss://backend-chating.herokuapp.com')
	const socket = new WebSocket('ws://localhost:8989')
	/**
	 * on a new user send the username to the server
	 */
	socket.onopen = () => {
		socket.send(JSON.stringify({
			type: types.ADD_USER,
			name: username
		}))
	}
	/**
	 * On a new change evaluate and set the state
	 * @param {*} event new change
	 */
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data)
		switch (data.type) {
			case types.ADD_MESSAGE:
				dispatch(messageReceived(data.message, data.author))
				break
			case types.ADD_USER:
				dispatch(addUser(data.name))
				break
			case types.USERS_LIST:
				dispatch(populateUsersList(data.users))
				break
			default:
				break
		}
	}
	return socket
}
// return the sockect with redux
export default setupSocket
