// Import libries
import { combineReducers } from "redux"
// Import modules
import messages from "./messages"
import users from "./users"
import videos from "./videos"

// Combine the reducers for the messages and the users
const chat = combineReducers({
	messages,
	users,
	videos
})
// Export the reducer combined
export default chat
