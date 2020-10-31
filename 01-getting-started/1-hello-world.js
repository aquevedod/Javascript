const http = require('http');

const server = http.createServer((req, res) =>{
    res.end('Hola Arnolis\n');
});

server.listen(4242, () => {
    console.log('Servidor corriendo...');
});