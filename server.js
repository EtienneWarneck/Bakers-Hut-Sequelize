var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

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
var routes = require("./controllers/pastries_controller.js");

app.use(routes);

//Server
app.listen(PORT, function () {
  console.log("SERVER: App now listening at localhost:" + PORT);
});
