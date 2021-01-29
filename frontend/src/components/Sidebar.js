// Import libraries
import React from 'react'
import propTypes from 'prop-types'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
// Import modules
import { userName } from '../redux/initialization/initialize_socket'
import logo_user from '../utils/lol.png';
import logo_other from '../utils/bebe.png';

/**
 * List of active users
 * @param {object} param0 state parameters for active users
 */
const Sidebar = ({ users }) => {

	return (
		<Grid item xs={3} id="borderRight500">
			<List>
				{/* Print the user logo */}
				<ListItem button key="1">
					<ListItemIcon>
						<Avatar alt={userName} src={logo_user} />
					</ListItemIcon>
					<ListItemText primary={userName}></ListItemText>
				</ListItem>
			</List>
			<Divider />
			<Paper id="scroll_list">
				<List>
					<ListItemText secondary={
						<Typography
							id="blue_color">
							Memes online
						</Typography>
					} align="center">
					</ListItemText>
					{/* Print all the users connected */}
					{users.map(user => {
						if (user.name !== userName) {
							return (
								<ListItem button key={user.id}>
									<ListItemIcon>
										<Avatar alt={user.name} src={logo_other} />
									</ListItemIcon>
									<ListItemText primary={user.name}>{user.name}</ListItemText>
								</ListItem>)
						}
					}
					)}
				</List>
			</Paper>
		</Grid>
	)
}
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
