/// how to build a basic web server - near end of this video - https://www.youtube.com/watch?v=pU9Q6oiQNd0

var http = require('http');

var server = http.createServer(function(request,response) {
    console.log('got a request!');
    response.write('hi there, I am node.JS and thanks for pinging port 3000');
    response.end();
});  // whenever you get a request on this port 3000, we can reply

server.listen(3000); // listen on port 3000
