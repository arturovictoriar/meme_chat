// Import libraries
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
// Import modules
import { userName } from '../redux/initialization/initialize_socket';

/**
 * User message
 * @param {Object} param0 state parameters for messages
 */
const Message = ({ message, author, date }) => {
	const youtube_embedded = "^/embeddedYoutubeVideo:";
	const youtube_command = new RegExp(youtube_embedded, "gm");

	return (
		<ListItem>
			<Grid container>
				{/*Print user*/}
				<Grid item xs={12}>
					<ListItemText
						align={(author === 'Me' || author === userName) ? "right" : "left"}
						secondary={
							<Typography
								id="blue_color">
								{(author === userName) ? "Me" : author}
							</Typography>
						}>
					</ListItemText>
				</Grid>
				{/* If it was send a video, print it, else print the messagge */}
				{(youtube_command.test(message) === true) ?
					<Grid item xs={12}>
						<ListItemText
							align={(author === 'Me' || author === userName) ? "right" : "left"}>
							<iframe width="300" height="200"
								src={`https://www.youtube.com/embed/${message.slice(youtube_embedded.length - 1,)}`}
							>
							</iframe>
						</ListItemText>
					</Grid>
					:
					<Grid item xs={12}>
						<ListItemText
							align={(author === 'Me' || author === userName) ? "right" : "left"}
							primary={message}>
						</ListItemText>
					</Grid>
				}
				{/*Print date*/}
				<Grid item xs={12}>
					<ListItemText
						align={(author === 'Me' || author === userName) ? "right" : "left"}
						secondary={date}>
					</ListItemText>
				</Grid>
			</Grid>
		</ListItem>
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
