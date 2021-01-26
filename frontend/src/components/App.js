// Import Libraries
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import Modules
import {Chat} from '../redux/containers/Chat';
import LogIn from './LogIn';

/**
 * Main component, chat components
 */
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LogIn} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}
// export the main component
export default App;
