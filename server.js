const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/hello-world'));

app.listen(process.env.port || 8080);

//PathLocationStrategy

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/hello-world/index.html'));
})

console.log("Listening");