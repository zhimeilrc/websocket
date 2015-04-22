var WebSocketServer = require('ws').Server;

var wss = new WebSocketServer({port: 8080});

wss.on('connection', function(ws) {
	ws.on('message', function(msg){
		console.log('received: %S', msg);
	});

	ws.send('hi client');
});


