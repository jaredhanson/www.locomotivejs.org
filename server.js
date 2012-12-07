var express = require('express');
var server = express();

server.use(express.logger());
server.use(express.static('locomotivejs.org'));
server.listen(3000);
