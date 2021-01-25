// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for users
 * @param {Object} state App state
 * @param {Object} action Action to do in the redux store
 */
const videos = (state = { status: false, memeSearch: "", videos: [] }, action) => {
	switch (action.type) {
		case types.SEARCH_VIDEO:
			return {...state, memeSearch: action.memeSearch}
		case types.YOUTUBE_MODE:
			return {...state, status: action.status}
		case types.GET_VIDEOS:
			return {...state, videos: action.videos}
		default:
			return state
	}
}
// Export the users reducer
export default videos
