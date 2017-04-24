var express = require('express');
var app = express();

// New call to compress content
//app.use(express.compress());

app.use(express.static(__dirname));

app.use('/bower', express.static(__dirname + "/bower_components"));
app.use(express.static(__dirname + "/app", {
    extensions: ['htm', 'html'],
    redirect: true
}));

var port = process.env.PORT || 30000;

app.listen(port);
console.log("App hosting on port: " +port);