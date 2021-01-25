// Import all from the constants in the ActionTypes module
import * as types from '../constants/ActionTypes'

/**
 * Reducer for users
 * @param {Object} state App videos state
 * @param {Object} action Action to do in the App state
 */
const videos = (state = { status: false, memeSearch: "", videos: [] }, action) => {
	switch (action.type) {
		/* Update the memeSearched */
		case types.SEARCH_VIDEO:
			return {...state, memeSearch: action.memeSearch}
		/* Update the mode of the input text box */
		case types.YOUTUBE_MODE:
			return {...state, status: action.status}
		/* Update the videos found in youtube */
		case types.GET_VIDEOS:
			return {...state, videos: action.videos}
		default:
			return state
	}
}
// Export the users reducer
export default videos
