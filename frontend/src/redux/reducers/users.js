// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for users
 * @param {Array} state App users state
 * @param {Object} action Action to do in the App state
 */
const users = (state = [], action) => {
	switch (action.type) {
		/* Update the User list */
		case types.USERS_LIST:
			return action.users
		default:
			return state
	}
}
// Export the users reducer
export default users
