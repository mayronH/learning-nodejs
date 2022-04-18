// Abrindo um servidor usando somente o node.js
// const http = require("http");

// http.createServer(function (req, res) {
//     res.end("Ola");
// }).listen(8080);

const express = require("express");
const app = express();

// Criando rotas
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/indexTeste.html");
});

app.get("/about", function (req, res) {
    res.send("Just an about page");
});

app.get("/hello/:name", function (req, res) {
    res.send("<h1>Hello " + req.params.name + "</h1>");
});

// Abrindo o servidor com o express na porta 8080
app.listen(8080, function () {
    console.log("Server running on : http://localhost:8080");
});
