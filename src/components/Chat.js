// Import Libraries
import React from 'react';
import propTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
// Import Modules
import { Sidebar } from "../redux/containers/Sidebar";
import { MessagesList } from "../redux/containers/MessagesList";
import { AddMessage } from "../redux/containers/AddMessage";
import '../styles/Chat.css';
import logo from '../utils/meme.png';

/**
 * Chat component, render the chat connected or disconnected
 */
const Chat = ({ users }) => {

  return (
    <div id="chat-container">
      { users.length === 0 ?
        <h1>Disconnected</h1>
        :
        null
      }
      <Grid container>
        {/* Show meme logo */}
        <Grid item xs={12} align="center" >
          <Avatar alt="logo" src={logo} id="size_logo"></Avatar>
        </Grid>
      </Grid>
      <Divider />
      <Grid container component={Paper}>
        {/* Show users connected */}
        <Sidebar />
        <Grid item xs={9}>
          {/* Show all messages */}
          <MessagesList />
          <Divider />
          {/* Input text user */}
          <AddMessage />
        </Grid>
      </Grid>
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
