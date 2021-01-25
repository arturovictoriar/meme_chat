// Import Libraries
import React from 'react';
// Import Modules
import '../styles/App.css';
import { Sidebar } from "../redux/containers/Sidebar"
import { MessagesList } from "../redux/containers/MessagesList"
import { AddMessage } from "../redux/containers/AddMessage"

/**
 * Main component, chat components
 */
const App = () => {
  return (
    <div id="container">
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}
// export the main component
export default App;
