const express         = require("express");
const bodyParser      = require("body-parser");
const validator       = require("express-validator");
const mustacheExpress = require("mustache-express");
const path            = require("path");
const routes          = require("./routes/routes.js");
const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.engine("mustache", mustacheExpress());
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "mustache");
server.set("layout", "layout");

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(validator());

server.use(routes);

server.listen(3000,function(req,res){
	console.log('server is running on port');
});