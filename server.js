var http = require('http');
var fs = require('fs');
// rootFolder = __dirname;
// url = require('url');
// defaultFileName = __dirname + '/' + 'index.html'



//404 response if the user trying to req a non existing file
function bout404(response){
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write('error 404: not found')
    response.end();
}

//handle request
function myRequest(request, response){

    if(request.method == 'GET' && request.url == '/'){
//forward slash is trying to connect to the home page
    response.writeHead(200,{"Content-Type": "text/html"})
    fs.createReadStream("./index.html").pipe(response);
//createReadStream it reads the file in given path
//pipe writes it to the response for client's view.
    }

    else{
        bout404(response);
    }
}


http.createServer(myRequest).listen(4001);
console.log("server is now running");

// var http = require('http'),
// fs = require('fs'),
// url = require('url'),
// rootFolder = __dirname,
// defaultFileName = __dirname + '/' + 'index.html';

// http.createServer(function(req, res){
//    var fileName = url.parse(req.url).pathname;
//    // If no filename in Url, use default file name
//    fileName = (fileName == "/") ? defaultFileName : rootFolder + decodeURIComponent(fileName);
//    console.log(decodeURIComponent(fileName));
//    fs.readFile( fileName, 'binary',function(err, content) {
//        if ( err ) { console.log(err); }
//        if (content != null && content != '' ){
//            res.writeHead(200,{'Content-Length':content.length});
//            res.write(content, 'binary');
//        }
//        res.end();
//    });
// }).listen(4001);

// var http = require('http');

// function myRequest(req, res){
//     console.log("you made a request");
//     response.writeHead(200, {"Context-Type": "text/plain"});
//     response.write("here is something data");
//     response.end();
// }
// http.createServer(myRequest).listen(4001);
// console.log("server is now running");
