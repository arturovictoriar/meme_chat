// Import libraries
import React from 'react'
import propTypes from 'prop-types'
import {userName} from '../redux/initialization/initialize_socket'

/**
 * User message
 * @param {Object} param0 state parameters for messages
 */
const Message = ({ message, author, date }) => {
	const youtube_embedded = "^/embeddedYoutubeVideo:";
	const youtube_command = new RegExp(youtube_embedded, "gm");

	return (
		<span id={(author === 'Me' || userName === author) ? "own_message" : "entry_message"}>
			<p>
				{author}:
			</p>
			{/* If it was send a video, print it, else print the messagge */}
			{ (youtube_command.test(message) === true) ?
				<iframe width="300" height="200"
					src={`https://www.youtube.com/embed/${message.slice(youtube_embedded.length - 1,)}`}
				>
				</iframe>
				:
				<p >
					{message}
				</p>
			}
			<p>
				{date}
			</p>
			<br />
		</span>
	)

}
// Connect the component with redux and notify me if a parameter not matches its type
Message.propTypes = {
	message: propTypes.string.isRequired,
	author: propTypes.string.isRequired,
	date: propTypes.string.isRequired
}
// Export the component
export default Message
