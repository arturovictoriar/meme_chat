// Import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
// Import modules
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import store from './redux/initialization/initilize_state';
// Render in index.html the App with the provider store
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
// Call the register Service Worker
registerServiceWorker();
