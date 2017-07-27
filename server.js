const http = require('http');

http.createServer((req, res) => {
    if (req.url.match(/\.(html|css|js|png)$/)) {

    } else if (req.url === '/') {

    } else if (req.url.startWith('/search')) {

    } else {

    }
}).listen(3000, () => console.log('Сервер работает'))