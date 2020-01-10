var express = require("express");

var app = express();
var db = require("./models");


var PORT = process.env.PORT || 3306;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


//Handlebars
var exphbs = require("express-handlebars"); 

app.engine(
  "handlebars",
  exphbs({
    layoutsDir: 'views/layouts', 
    defaultLayout: "main",
    extname: 'handlebars',
    helpers: {json: function(context) {
      return JSON.stringify(context);
    }}
  })
  );
  
  app.set("view engine", "handlebars"); 

//Routes
var routes = require("./controllers/pastries_controller.js")(app);

// app.use(routes);


db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("listen on port", PORT);
	});
});
