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

	function handleChangeYoutubeSearch(e) {
		let ysearch = "";

		if (youtube_command.test(input.value) === true) {
			input.value = prefix_search;
			props.dispatch_mode(true);
		}
		else if (props.status === true && input.value.length < prefix_search.length) {
			input.value = last_input;
			props.dispatch_mode(false);
		}
		else if (props.status === true && input.value.length >= prefix_search.length) {
			props.dispatch_search(input.value.slice(prefix_search.length - 1,));
			ysearch = props.memeSearch.replace(" ", "%20")
			fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${ysearch}&type=video&key=AIzaSyBMJoVDJSzDGVyFTX5xZvbtBIW9KcC4ztY`).then(
				response => response.json()).then(
					data => {
						props.dispatch_get(data.items);
						console.log(data.items)
					});
		}
	}

	return (
		<section id="new-message">
			<input
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						props.dispatch_message(input.value, 'Me', 'Hoy')
						input.value = ''
					}
				}}
				onChange={handleChangeYoutubeSearch}
				type="text"
				ref={(node) => {
					input = node
				}}
			/>

			<div id={props.status === true ? "show_suggestions" : "hide_suggestions"}>
				<ul>
					{props.videos.map(video => (
						<li>Arturo</li>
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
