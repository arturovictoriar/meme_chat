// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for messages
 * @param {Array} state App messages state
 * @param {Object} action Action to do in the App state
 */
const messages = (state = [], action) => {
	switch (action.type) {
		/* Update the messages recieved and sent */
		case types.UPDATE_MESSAGES:
			return action.messages
		case types.ADD_MESSAGE:
		case types.MESSAGE_RECEIVED:
			return state.concat([
				{
					message: action.message,
					author: action.author,
					id: action.id,
					date: action.date
				}
			])
		default:
			return state
	}
}
// Export the messages reducer
export default messages
