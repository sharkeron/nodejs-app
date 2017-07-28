const http = require('http');

const {publicPath, homePath, searchPath, notFound} = require('./routes');

http.createServer((req, res) => {
	if (req.url.match(/\.(html|css|js|png)$/)) {
		publicPath(req, res);
	} else if (req.url === '/') {
		homePath(req, res);
	} else if (req.url.startsWith('/search')) {
		searchPath(req, res);
	} else {
		notFound(req, res);
	}
}).listen(3000, () => console.log('Сервер работает'));