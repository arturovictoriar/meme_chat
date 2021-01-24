// Import libraries
import { connect } from 'react-redux'
// Import modules
import MessagesListComponent from '../../components/MessagesList'

// Getting state messages of the app for show them in Message List component
export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)
