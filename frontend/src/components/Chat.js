// Import Libraries
import React from 'react';
import propTypes from 'prop-types'
// Import Modules
import '../styles/App.css';
import { Sidebar } from "../redux/containers/Sidebar"
import { MessagesList } from "../redux/containers/MessagesList"
import { AddMessage } from "../redux/containers/AddMessage"

/**
 * Main component, chat components
 */
const Chat = ({users}) => {
  return (
    users.length === 0 ?
    <h1>You haven't logged in</h1> :
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}
// Connect the component with redux and notify me if a parameter not matches its type
Chat.propTypes = {
	users: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
		}).isRequired
	).isRequired
}
// export the main component
export default Chat;
