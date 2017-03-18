var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var cache = {};

function send404(response) {
    var headers = {
        "Content-Type": 'text/plain'
    }
    response.writeHead(404, '', headers);
    response.write('Error 404: no file');
    response.end();
}