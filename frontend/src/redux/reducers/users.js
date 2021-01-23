// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for users
 * @param {Object} state App state
 * @param {Object} action Action to do in the redux store
 */
const users = (state = [], action) => {
	switch (action.type) {
		case types.ADD_USER:
			return state.concat([
				{ name: action.name, id: action.id }
			])
		case types.USERS_LIST:
			return action.users
		default:
			return state
	}
}
// Export the users reducer
export default users
