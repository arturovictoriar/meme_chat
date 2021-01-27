// Import libraries
import { connect } from 'react-redux'
// Import modules
import ChatComponent from '../../components/Chat'

// Getting state users of the app for show them in SideBar component
export const Chat = connect(state => ({
	users: state.users
}), {})(ChatComponent)
