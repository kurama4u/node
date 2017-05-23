var http = require('http');
var fs = require('fs');

if(fs.readFile('index.html', (err, data) => {
    if(err) {
        throw err;
    }

    var server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write(data);
    res.end();
});
server.listen(8080, function(){
    console.log("server started");
 
});
}));

