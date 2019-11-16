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
        // let postData = '';
        const pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received');
        route(handle, pathname, res, req);

        // req.setEncoding('utf8');

        // req.addListener('data', function(postDataChunk) {
        //     postData += postDataChunk;
        //     console.log('Received POST data chunk \'' +
        //     postDataChunk + '\'.');
        // });

        // req.addListener('end', function() {
        //     route(handle, pathname, res, postData);
        // });
        // route(handle, pathname, res);

        // route(handle, pathname);

        // res.writeHead(200, { 'Content-Type': 'text/plain'});
        // const content = route(handle, pathname);
        // res.write(content);
        // res.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');
}

exports.start = start;
