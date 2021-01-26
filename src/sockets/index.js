// Import modules
import *  as types from '../redux/constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../redux/actions'

/**
 * Conect redux with the sockets for updating the entry and outer messages
 * @param {Function} dispatch trigger to save the data in redux
 * @param {String} username user name
 */
const setupSocket = (dispatch, username) => {
	// replace for heroku const socket = new WebSocket('wss://backend-chating.herokuapp.com')
	const socket = new WebSocket('wss://backend-chating.herokuapp.com')
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
	 * @param {String} event new change
	 */
	socket.onmessage = (event) => {
		const data = JSON.parse(event.data)

		/* If a new message arrive, set the state depend on the type */
		switch (data.type) {
			/* If the type is for adding a message, save the given data in the state*/
			case types.ADD_MESSAGE:
				dispatch(messageReceived(data.message, data.author, data.date))
				break
			/* If the type is for adding a user, save the given data in the state*/
			case types.ADD_USER:
				dispatch(addUser(data.name))
				break
			/* If the type is for updating the availables users, save the given data in the state*/
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
