const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, World\n');

});
const hostname = '0.0.0.0';
server.listen(3000, hostname,() => {
    console.log('Server ruuning at http://localhost:3000/');
});