/**
 * Created by ericanderson on 1/7/16.
 */
var express = require('express');
var birds = require('./routes/birds');
var app = express();

app.use('/birds', birds);

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log('Listening on port', port);
});