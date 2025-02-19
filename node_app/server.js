const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url.startsWith('/node')) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello World from Node.js!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Node.js app running on port 3000');
});