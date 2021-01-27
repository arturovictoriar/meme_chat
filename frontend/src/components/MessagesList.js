// Import libraries
import React from 'react'
import propTypes from 'prop-types'
// Import modules
import Message from './Message'

/**
 * List of users messages
 * @param {Object} param0 state parameters for messages
 */
const MessagesList = ({ messages }) => (
	<div id="all-messages">
		<div id="messages-list">
			{/* Print all the messages sended */}
			{messages.map(message => (
				<Message
					key={message.id}
					{...message}
				/>
			))}
		</div>
	</div>

)
// Connect the component with redux and notify me if a parameter not matches its type
MessagesList.propTypes = {
	messages: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			message: propTypes.string.isRequired,
			author: propTypes.string.isRequired,
			date: propTypes.string.isRequired
		}).isRequired
	).isRequired
}
// Export the component
export default MessagesList