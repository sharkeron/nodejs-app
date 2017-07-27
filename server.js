const http = require('http');

const publicPath = require('./routes/public');

http.createServer((req, res) => {
	if (req.url.match(/\.(html|css|js|png)$/)) {
		publicPath(req, res);
	} else if (req.url === '/') {

	} else if (req.url.startsWith('/search')) {

	} else {

	}
}).listen(3000, () => console.log('Сервер работает'));