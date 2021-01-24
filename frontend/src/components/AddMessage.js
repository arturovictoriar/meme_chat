// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * Text input user message
 * @param {Object} props state with user and message data
 */
const AddMessage = (props) => {
	let input

	return (
		<section id="new-message">
			<input
				onKeyPress={(e) => {
					if (e.key === 'Enter') {
						props.dispatch(input.value, 'Me', 'Hoy')
						input.value = ''
					}
				}}
				type="text"
				ref={(node) => {
					input = node
				}}
			/>
		</section>
	)
}
// Connect the component with redux
AddMessage.propTypes = {
	dispatch: propTypes.func.isRequired
}
// Export the component
export default AddMessage
