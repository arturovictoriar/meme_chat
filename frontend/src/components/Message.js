// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * Usernames message
 * @param {Object} param0 state parameters
 */
const Message = ({ message, author, date }) => (
	<span>
		<span id={author === 'Me' ? "own_message" : "entry_message"}>
			{author} {date} : {message}
		</span>
		<br/>
	</span>
)
// Connect the component with redux
Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired,
	date: propTypes.string.isRequired
}
// Export the component
export default Message
