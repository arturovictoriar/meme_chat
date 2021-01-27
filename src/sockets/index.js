// Import modules
import { messageReceived, populateUsersList, uppdateMessages } from '../redux/actions';
import io from "socket.io-client";

/**
 * Conect redux with the sockets for updating the entry and outer data
 * @param {Function} dispatch trigger to save the data in redux
 * @param {String} username user name
 */
const setupSocket = (dispatch, username) => {
	// replace for heroku 'backend-chating.herokuapp.com'
	const ENDPOINT = 'https://backend-chating.herokuapp.com';
	const socket = io(ENDPOINT);
	/**
	 * on a new user send the username to the server
	 */
	socket.on('connect', () => {
		socket.emit('addUser', { username }, (error) => {
			if (error) {
				alert(error);
			}
		});
	});

	/**
	 * on a receiveMessage event, update the messages state
	 */
	socket.on('receiveMessage', (data, callback) => {
		dispatch(messageReceived(data.message, data.author, data.date, data.id))
	});

	/**
	 * on a updateMessages event, update the messages state
	 */
	socket.on('updateMessages', (data, callback) => {
		dispatch(uppdateMessages(data.messages))
	});

	/**
	 * on a usersList event, update the users state
	 */
	socket.on('usersList', (data, callback) => {
		dispatch(populateUsersList(data.users))
	});

	return socket
}
// return the sockect with redux
export default setupSocket
