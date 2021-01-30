// Import libraries
import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
// Import modules
import Message from './Message';

/**
 * List of users messages
 * @param {Object} param0 state parameters for messages
 */
const MessagesList = ({ messages }) => {
	const messagesEndRef = useRef(null);

	// scroll to the botton of the messages if there are new messages
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
	};

	useEffect(scrollToBottom, [messages]);

	return (
		<Paper id="scroll_list">
			<List>
				{/* Print all the messages sended */}
				{messages.map(message => (
					<Message
						key={message.id}
						{...message}
					/>
				))}
				<div ref={messagesEndRef} />
			</List>
		</Paper>
	)
}
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