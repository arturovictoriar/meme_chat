// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * List of active users
 * @param {*} param0 state parameters
 */
const Sidebar = ({ users }) => (
	<aside id="sidebar" className="sidebar">
		<ul>
			{users.map(user => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	</aside>
)
// Connect the component with redux
Sidebar.propTypes = {
	users: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.number.isRequired,
			name: propTypes.string.isRequired,
		}).isRequired
	).isRequired
}
// Export the component
export default Sidebar
