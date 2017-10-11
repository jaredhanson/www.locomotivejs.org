var express = require('express');
var server = express();

server.use(express.logger());
server.use(express.static('www'));
server.listen(3000);
