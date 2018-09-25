const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/hello-world'));



//PathLocationStrategy

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/hello-world/index.html'));
})


//app.listen(process.env.port || 8080);
console.log("Listening");



var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});