// Import libries
import { combineReducers } from "redux"
// Import modules
import messages from "./messages"
import users from "./users"
import videos from "./videos"

// Combine the reducers for the messages, the users and the videos
const chat = combineReducers({
	messages,
	users,
	videos
})
// Export the reducer combined
export default chat
