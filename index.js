const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const Post = require("./models/Post");

//Template Engine
const handle = handlebars.create({
    defaultLayout: "main",
});
app.engine("handlebars", handle.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

// Body Parser
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(express.json());

// Routes
app.get("/", function (req, res) {
    Post.findAll({ order: [["createdAt", "DESC"]] }).then(function (postList) {
        res.render("./layouts/home", { posts: postList });
    });
});

app.get("/create", function (req, res) {
    res.render("./layouts/form");
});

app.post("/add", function (req, res) {
    Post.create({
        title: req.body.title,
        body: req.body.body,
    })
        .then(function () {
            res.redirect("/");
        })
        .catch(function (error) {
            res.send(error);
        });
});

app.get("/delete/:id", function (req, res) {
    Post.destroy({ where: { id: req.params.id } })
        .then(function () {
            res.send("Success");
        })
        .catch(function (error) {
            res.send(error);
        });
});

app.listen(8080, function () {
    console.log("Server running on : http://localhost:8080");
});
