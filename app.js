// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Halo, ini tutorial GitHub Actions x DockerHub!\n');
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});