// Import all from Action Types module
import * as types from '../constants/ActionTypes'
// setup the message and user id in the app
let nextMessageId = 0
let nextUserId = 0

/**
 * Action when adding a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 * @param {string} date date of the message
 */
export const addMessage = (message, author, date) => ({
	type: types.ADD_MESSAGE,
	id: nextMessageId++,
	message,
	author,
	date
})

/**
 * Action when adding a user
 * @param {string} name username
 */
export const addUser = name => ({
	type: types.ADD_USER,
	id: nextUserId++,
	name
})

/**
 * Action when receibing a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 * @param {string} date date of the message
 */
export const messageReceived = (message, author, date) => ({
	type: types.MESSAGE_RECEIVED,
	id: nextMessageId++,
	message,
	author,
	date
})

/**
 * Action when storing the users
 * @param {Array} users list of users connected
 */
export const populateUsersList = users => ({
	type: types.USERS_LIST,
	users
})

/**
 * Action when storing the words to search on youtube
 * @param {string} memeSearch words searched
 */
export const searchVideo = (memeSearch) => ({
	type: types.SEARCH_VIDEO,
	memeSearch
})

/**
 * Action when storing the status mode
 * @param {boolean} status status mode for youtube search
 */
export const youtubeMode = (status) => ({
	type: types.YOUTUBE_MODE,
	status
})

/**
 * Action when storing the videos found on youtube
 * @param {Array} videos list of videos found in youtube
 */
export const getVideos = (videos) => ({
	type: types.GET_VIDEOS,
	videos
})
