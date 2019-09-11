// const http = require('http'); //requires the http module that ships with Node.js, makes it callable. 

// http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.write('Hello World');
//     res.end();
// }) 
//     .listen(8888);

const http = require('http'); //requires the http module that ships with Node.js, makes it callable. 

function onRequest(req, res) {
    console.log('Request received');
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
}

http.createServer(onRequest).listen(8888);

console.log('Server has started');