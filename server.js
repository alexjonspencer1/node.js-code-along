// const http = require('http'); //requires the http module that ships with Node.js, makes it callable. 

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
// }) 
//     .listen(8888);

const http = require('http'); //requires the http module that ships with Node.js, makes it callable. 
const url = require('url');

function start(route, handle) {
    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');

        route(handle, pathname);

        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.write('Hello World');
        res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;
