var express     = require("express"),
    app         = express(),
    GitHub      = require("github-api"),
    bodyParser  = require("body-parser");
    
var github = new GitHub({
   token: '16435adee78fe16dc05a0c31e3351f78b4243042' 
});

app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    github.getUser().listRepos({}, function(err, data, headers) {
        res.render("home", {repos: data});
    });
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Up");
});