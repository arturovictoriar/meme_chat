import { v4 as uuidv4 } from 'uuid';
// Import all from Action Types module
import * as types from '../constants/ActionTypes'
import {userName} from '../initialization/initialize_socket'
/**
 * Action when adding a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 * @param {string} date date of the message
 */
export const addMessage = (message, author, date) => ({
	type: types.ADD_MESSAGE,
	id: userName.concat("#", uuidv4()),
	message,
	author,
	date
})

/**
 * Action when receibing a message
 * @param {string} message message to be store
 * @param {string} author author of the message
 * @param {string} date date of the message
 */
export const messageReceived = (message, author, date, id) => ({
	type: types.MESSAGE_RECEIVED,
	id,
	message,
	author,
	date
})

export const uppdateMessages = (messages) => ({
	type: types.UPDATE_MESSAGES,
	messages
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
