// Import libraries
import React from 'react'
import propTypes from 'prop-types'
// Import modules
import Message from './Message'

/**
 * List of users messages
 * @param {*} param0 state parameters
 */
const MessagesList = ({ messages }) => (
	<section id="all-messages">
		<section id="messages-list">
			{messages.map(message => (
				<Message
					key={message.id}
					{...message}
				/>
			))}
		</section>
	</section>
	
)
// Connect the component with redux
MessagesList.propTypes = {
	messages: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.number.isRequired,
			message: propTypes.string.isRequired,
			author: propTypes.string.isRequired,
			date: propTypes.string.isRequired
		}).isRequired
	).isRequired
}
// Export the component
export default MessagesList