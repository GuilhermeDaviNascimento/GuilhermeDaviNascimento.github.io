const WebSocket = require('websocket').server;
const http = require('http');

const server = http.createServer(function (request, response) {
    // Servir o arquivo HTML
});

server.listen(8080, function () {
    console.log('Servidor iniciado na porta 8080');
});

const wsServer = new WebSocket({
    httpServer: server,
    autoAcceptConnections: false,
});

wsServer.on('request', function (request) {
    const connection = request.accept('echo-protocol', request.origin);
    
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // Broadcasting da mensagem para todos os clientes
            wsServer.connections.forEach(function (client) {
                if (client !== connection && client.connected) {
                    client.sendUTF(message.utf8Data);
                }
            });
        }
    });
    
    connection.on('close', function (reasonCode, description) {
        // Tratamento de fechamento de conexão
    });
});
