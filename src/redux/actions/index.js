// Import all from Action Types module
import * as types from '../constants/ActionTypes'
// setup the message and user id in app
let nextMessageId = 0
let nextUserId = 0

/**
 * Create the action when adding a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 */
export const addMessage = (message, author) => ({
	type: types.ADD_MESSAGE,
	id: nextMessageId++,
	message,
	author
})

/**
 * Create the action when adding a user
 * @param {string} name 
 */
export const addUser = name => ({
	type: types.ADD_USER,
	id: nextUserId++,
	name
})

/**
 * Create the action when receibing a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 */
export const messageReceived = (message, author) => ({
	type: types.MESSAGE_RECEIVED,
	id: nextMessageId++,
	message,
	author
})

/**
 * Create the action for store the users
 * @param {Array} users list of users connected
 */
export const populateUsersList = users => ({
	type: types.USERS_LIST,
	users
})
