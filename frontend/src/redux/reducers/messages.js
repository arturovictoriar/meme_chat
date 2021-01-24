// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for messages
 * @param {Object} state App state
 * @param {object} action Action to do in the redux store
 */
const messages = (state = [], action) => {
	switch (action.type) {
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
