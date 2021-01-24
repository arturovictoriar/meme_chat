// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * Usernames message
 * @param {Object} param0 state parameters
 */
const Message = ({ message, author }) => (
	<p>
		<i>{author}</i>: {message}
	</p>
)
// Connect the component with redux
Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired
}
// Export the component
export default Message
