// Import libraries
import { takeEvery } from 'redux-saga/effects'
// Import modules
import * as types from '../constants/ActionTypes'

/**
 * Create a sagas generator for handle a new message
 * @param {Object} params message information
 */
const handleNewMessage = function* handleNewMessage(params) {
	yield takeEvery(types.ADD_MESSAGE, (action) => {
		action.author = params.username
		params.socket.send(JSON.stringify(action))
	})
}
// export the generator
export default handleNewMessage
