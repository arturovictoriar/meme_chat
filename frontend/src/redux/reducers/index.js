// Import libries
import { combineReducers } from "redux"
// Import modules
import messages from "./messages"
import users from "./users"

// Combine the reducers for the messages and the users
const chat = combineReducers({
	messages,
	users
})
// Export the reducer combined
export default chat
