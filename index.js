var http = require('http');
var express = require('express');

var app = express();
// app.set('trust proxy', true);

var router = express.Router();

router.use('/', express.static('./'));

app.use('/', router);

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(req, res) {
    var addr = server.address();

    console.log("Web server listening at", addr.address + ":" + addr.port);
});