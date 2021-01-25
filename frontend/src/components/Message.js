// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * Usernames message
 * @param {Object} param0 state parameters
 */
const Message = ({ message, author, date }) => {
	const youtube_embedded = "^/embeddedYoutubeVideo:";
	const youtube_command = new RegExp(youtube_embedded, "gm");

	return (
		<span>
			<span id={author === 'Me' ? "own_message" : "entry_message"}>
				{author} {date} :
				</span>
			{ (youtube_command.test(message) === true) ?
				<iframe width="300" height="200"
					src={`https://www.youtube.com/embed/${message.slice(youtube_embedded.length - 1,)}`}
					id={author === 'Me' ? "own_message" : "entry_message"}>
				</iframe>
				:
				<span id={author === 'Me' ? "own_message" : "entry_message"}>
					{message}
				</span>
			}
			<br />
		</span>
	)

}
// Connect the component with redux
Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired,
	date: propTypes.string.isRequired
}
// Export the component
export default Message
