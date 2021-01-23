// Import WebSocket library
const WebSocket = require('ws');
// Set the server in the por 8989 of this machine
const wss = new WebSocket.Server({ port: 8989 });
// Create the users list
const users = [];

/**
 * Broadcast a data sent by other user
 * @param {string} data data user to broadcast
 * @param {InstanceType} ws Web socket
 */
const broadcast = (data, ws) => {
	wss.clients.forEach((client) => {
		if (client.readyState === WebSocket.OPEN && client !== ws) {
			client.send(JSON.stringify(data))
		}
	});
};
/**
 * On web socket server connection
 * @param {InstanceType} ws web socket
 */
wss.on('connection', (ws) => {
	let index;
	/**
	 * On incoming message, check if the incoming data is for ADD a USER or
	 * ADD a Message.
	 * @param {string} message incoming message
	 */
	ws.on('message', (message) => {
		const data = JSON.parse(message);
		switch (data.type) {
			/* If message type is for adding a user, save in the list and update this
			user in the chat*/
			case 'ADD_USER': {
				index = users.length;
				users.push({ name: data.name, id: index + 1 });
				ws.send(JSON.stringify({
					type: 'USERS_LIST',
					users
				}));
				broadcast({
					type: 'USERS_LIST',
					users
				}, ws);
				break;
			}
			/* If message type is for adding a message, update this message in the chat*/
			case 'ADD_MESSAGE':
				broadcast({
					type: 'ADD_MESSAGE',
					message: data.message,
					author: data.author
				}, ws);
				break;
			default:
				break;
		}
	});
	/**
	 * On close connection delete the user of the list and update it in chat
	 */
	ws.on('close', () => {
		users.splice(index, 1);
		broadcast({
			type: 'USERS_LIST',
			users
		}, ws);
	});
});
