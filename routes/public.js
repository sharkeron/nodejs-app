const fs = require('fs');
const path = require('path');

function publicPath(req, res) {
	const extension = path.extname(req.url); // /css/app.css -> .css
	const  filename= req.url.slice(1); // /css/app.css -> css/app.css
	let contentType = '';

	switch (extension){
		case '.html' :
			contentType = 'text/html';
			break;
		case '.css' :
			contentType = 'text/css';
			break;
		case '.js' :
			contentType = 'text/javascript';
			break;
		case '.png' :
			contentType = 'image/png';
			break;
		default:
			contentType = 'text/plain';
	}

	res.statusCode = 200;
	res.setHeader('Content-Type', contentType);

	const stream = fs.createReadStream(path.resolve('public', filename)); // /cwd/public/css/app.css

	stream.pipe(res);
	stream.on('error', error => {
		if(error.code === 'ENOENT'){
			console.log(error);
			res.writeHead(404,{'Content-Type': 'text/plain'});
			res.end('Not found');
		} else {
		res.writeHead(500,{'Content-Type': 'text/plain'});
		res.end(error.message);
	}
	});
}

module.exports = publicPath;