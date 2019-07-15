var express = require('express');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var app=express();
app.use(express.static('alpha'))
app.post('/abc',urlencodedParser, function (req, res) {
	
	console.log("post Resved");
   	var r=(req.body.num);
   	var x=(req.body.key);
    res.send(r*x+ " ");
  // res.send(r+" ");
});

var server = app.listen(3000, function () {
  
   console.log("server is running", server.address().port);
});