// Import libraries
import React from 'react'
import propTypes from 'prop-types'

/**
 * List of active users
 * @param {*} param0 state parameters for active users
 */
const Sidebar = ({ users }) => (
	<aside id="sidebar" className="sidebar">
		<ul>
			{/* Print all the users connected */}
			{users.map(user => (
				<li key={user.id}>{user.name}</li>
			))}
		</ul>
	</aside>
)
// Connect the component with redux and notify me if a parameter not matches its type
Sidebar.propTypes = {
	users: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
		}).isRequired
	).isRequired
}
// Export the component
export default Sidebar
