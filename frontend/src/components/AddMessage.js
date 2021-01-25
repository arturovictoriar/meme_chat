// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * Text input user message
 * @param {Object} props state with user and message data
 */
const AddMessage = (props) => {
	const youtube_command = /^\/youtube /gm;
	const prefix_search = "$meme_video: "
	let last_input = "/youtube";
	let input;

	const handleChangeYoutubeSearch = (e) => {
		if (youtube_command.test(input.value) === true) {
			input.value = prefix_search;
			props.dispatch_mode(true);
		}
		else if (props.status === true && input.value.length < prefix_search.length) {
			input.value = last_input;
			props.dispatch_mode(false);
			props.dispatch_get([]);
		}
		else if (props.status === true && input.value.length >= prefix_search.length) {
			props.dispatch_search(input.value.slice(prefix_search.length - 1,));
		}
	}

	const searchYoutubeVideo = () => {
		let ysearch = "";

		ysearch = props.memeSearch.replace(" ", "%20")
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

	const sendMessages = (e) => {
		if (e.key === 'Enter') {
			if (props.status === true && props.memeSearch.length > 0) {
				searchYoutubeVideo();
			}
			else {
				props.dispatch_message(input.value, 'Me', 'Hoy');
				input.value = '';
			}
		}
	}

	const sendVideo = (video) => {
		const videoEmbedded = "/embeddedYoutubeVideo:" + video.id.videoId;
		props.dispatch_mode(false);
		props.dispatch_get([]);
		props.dispatch_search("");
		props.dispatch_message(videoEmbedded, 'Me', 'Hoy');
		input.value = '';
	}

	return (
		<section id="new-message">
			<input
				onKeyPress={sendMessages}
				onChange={handleChangeYoutubeSearch}
				type="text"
				ref={(node) => {
					input = node
				}}
			/>

			<div id={props.status === true ? "show_suggestions" : "hide_suggestions"}>
				<ul>
					{props.videos.map((video, i) => (
						video.error ? <li>{video.error}</li> :
							<li key={i} onClick={() => sendVideo(video)}>
								<img src={video.snippet.thumbnails.default.url} alt="video"></img>
								{video.snippet.title}</li>
					))}
				</ul>
			</div>
		</section>
	)
}
// Connect the component with redux
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
