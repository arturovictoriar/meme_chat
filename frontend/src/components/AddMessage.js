// Import libraries
import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

/**
 * User message text input
 * @param {Object} props state with user, message data and the youtube search
 */
const AddMessage = (props) => {
	const youtube_command = /^\/youtube /gm;
	const prefix_search = "$meme_video: ";
	const myUser = "Me";
	let last_input = "/youtube";
	let input;

	/**
	 * get the current date in a string data type
	 */
	const dateNow = () => {
		const d = new Date();
		return (d.toUTCString())
	}

	/**
	 * Handle the command for searching in youtube
	 * @param {Object} e event
	 */
	const handleChangeYoutubeSearch = (e) => {
		// if the user set the command youtube search, set the mode send video
		if (youtube_command.test(input.value) === true) {
			input.value = prefix_search;
			props.dispatch_mode(true);
		}
		// if the user doesnt want to send a video, unset the mode send video
		else if (props.status === true && input.value.length < prefix_search.length) {
			input.value = last_input;
			props.dispatch_mode(false);
			props.dispatch_get([]);
		}
		// if the user is in send video mode, save the words to search
		else if (props.status === true && input.value.length >= prefix_search.length) {
			props.dispatch_search(input.value.slice(prefix_search.length - 1,));
		}
	}

	/**
	 * Search a given video on youtube and save the results
	 */
	const searchYoutubeVideo = () => {
		let ysearch = "";

		ysearch = props.memeSearch.replace(" ", "%20");
		fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${ysearch}&type=video&videoEmbeddable=true&key=AIzaSyBEwL4HbjmYB7kqJYZTaWAtXNSpk7pWPsk`).then(
			response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json()
			}).then(
				data => {
					props.dispatch_get(data.items);
				}).catch(() => {
					props.dispatch_get([{ error: "Service disabled" }]);
				});
	}

	/**
	 * Send a message or a video from the input text box
	 * @param {Object} e event
	 */
	const sendMessages = (e) => {
		if (e.key === 'Enter') {
			// if status mode is youtube command, search a given video
			if (props.status === true && props.memeSearch.length > 0) {
				searchYoutubeVideo();
			}
			// else, send the given message
			else {
				props.dispatch_message(input.value, myUser, dateNow());
				input.value = '';
			}
		}
	}

	/**
	 * if the user select a video, send it to the other users
	 * @param {Object} video information of the videos
	 */
	const sendVideo = (video) => {
		const videoEmbedded = "/embeddedYoutubeVideo:" + video.id.videoId;
		props.dispatch_mode(false);
		props.dispatch_get([]);
		props.dispatch_search("");
		props.dispatch_message(videoEmbedded, myUser, dateNow());
		input.value = '';
	}

	return (
		<Grid container className="input_message">
			{/* Input text box */}
			<Grid item xs={12}>
				<input
					onKeyPress={sendMessages}
					onChange={handleChangeYoutubeSearch}
					type="text"
					placeholder="/youtube"
					ref={(node) => {
						input = node
					}}
				/>
			</Grid>
			{/* Show the suggestion */}
			<Grid container className="input_message"
			id={(props.status === true && props.videos.length > 0) ? "show_suggestions" : "hide_suggestions"}>
				{/* print all the videos found */}
				{(props.videos.length > 0 && props.videos[0].error) ?
					<Grid item xs={12}>
						{props.videos.error}
					</Grid> :
					props.videos.map((video, i) => (
						<Grid container key={i} onClick={() => sendVideo(video)}>
							<Grid item xs={2}>
								<img src={video.snippet.thumbnails.default.url} alt="video"></img>
							</Grid>
							<Grid item xs={9}>
								{video.snippet.title}
							</Grid>
						</Grid>
					))}

			</Grid>
		</Grid>
	)
}
// Connect the component with redux and notify me if a parameter not matches its type
AddMessage.propTypes = {
	dispatch_message: propTypes.func.isRequired,
	dispatch_search: propTypes.func.isRequired,
	dispatch_mode: propTypes.func.isRequired,
	dispatch_get: propTypes.func.isRequired,
	status: propTypes.bool.isRequired,
	memeSearch: propTypes.string.isRequired,
	videos: propTypes.array.isRequired,
}
// Export the component
export default AddMessage
