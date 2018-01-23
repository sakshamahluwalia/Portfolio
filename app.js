var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/projects", function(req, res){
    res.render("projects(main)");
});

app.get("/projects/page2", function(req, res){
    res.render("projects[1]");
});

app.get("/projects/page3", function(req, res){
    res.render("projects[2]");
});

app.get("/projects/page4", function(req, res){
    res.render("projects[3]");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Up");
});