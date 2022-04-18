const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");

//Config

//Template Engine
const handle = handlebars.create({
    defaultLayout: "main",
});
app.engine("handlebars", handle.engine);
app.set("view engine", "handlebars");

//DB Connection
const sequelize = new Sequelize("teste", "root", "*********", {
    host: "localhost",
    dialect: "mysql",
});

// Routes
app.get("/create", function (req, res) {
    res.send("Teste");
});

app.listen(8080, function () {
    console.log("Server running on : http://localhost:8080");
});
