const express 	= require('express');
const router 	= express.Router();
const mongoose 	= require('mongoose');
const Schema 	= mongoose.Schema;

mongoose.Promise = require("bluebird");
mongoose.connect("mongodb://localhost:27017/collection-manager");

let data = {};


const bookSchema = new Schema({
	title: {type:String, required:true},
	author: {type:String, required:true},
	rank:{type:Number, unique:true},
	specialEdition:{type:Boolean},
	otherPublishings:[{
		title:{type:String}
	}]
});

const Book = mongoose.model('Book',bookSchema);

router.get('/',function(req,res){
	console.log("home route");
	res.render('index');
});

router.post('/addBook',function(req,res){
	console.log(req.body);
	res.redirect('/');
});
 

module.exports = router;