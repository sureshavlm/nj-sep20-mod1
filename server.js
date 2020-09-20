//simple web application using http server

const http = require('http'); // import statement


const port = process.env.PORT || 8080;

const server = http.createServer(function(req, res) {
                    res.end("Welcome to nodeJS web application");
                });

server.listen(port, function() {
    console.log('Server listening on port %s',port);
});