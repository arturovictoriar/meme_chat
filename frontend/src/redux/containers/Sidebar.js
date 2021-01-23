// Import libraries
import { connect } from 'react-redux'
// Import modules
import SidebarComponent from '../../components/Sidebar'

// Getting state users of the app for show them in SideBar component
export const Sidebar = connect(state => ({
	users: state.users
}), {})(SidebarComponent)
