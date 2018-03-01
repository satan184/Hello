var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyparser.json());
app.get('/:id', function(req,res){
	//var ts = {};
	//console.log(typeof(req.params.id));
	var options = {
		day:"numeric",
		month:"long",
		year:"numeric"
	}
	if(isNaN(req.params.id)){

	var normalDate = new Date(req.params.id).toLocaleDateString('en-US', options);
	var unixDate = new Date(req.params.id).getTime()/1000;
		if(normalDate == "Invalid Date"){
			normalDate = null;
		}
		
	
} else{
	var normalDate = new Date(req.params.id*1000).toLocaleDateString('en-US', options);
	var unixDate = req.params.id;
	
	
	
}
	res.json({normal: normalDate, unix: unixDate});
});
app.get('/:id([0-9]{10})', function(req,res){
	var ts = {};
	
});
app.listen(3000);