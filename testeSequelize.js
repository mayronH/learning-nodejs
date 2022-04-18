const Sequelize = require("sequelize");
const sequelize = new Sequelize("database", "user", "password.", {
    host: "localhost",
    dialect: "mysql",
});

function testConnection() {
    sequelize
        .authenticate()
        .then(function () {
            console.log("Conectado com sucesso");
        })
        .catch(function (error) {
            console.log("Falha ao conectar " + error);
        });
}

const Postagem = sequelize.define("postagens", {
    title: {
        type: Sequelize.STRING,
    },
    body: {
        type: Sequelize.TEXT,
    },
});

const Usuario = sequelize.define("usuarios", {
    name: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    age: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
});

// Usuario.sync();
// Postagem.sync({ force: true });

// Postagem.create({
//     title: "Teste",
//     body: "dfkmc,vmcv,.vcvnljsfjsdfjsdkfjsljflkjdfsdklfjsdjfsdklfjxncvcxcvxcmv,n",
// });

// Usuario.create({
//     name: "Teste",
//     lastName: "Node",
//     age: "25",
//     email: "teste@teste.com",
// });
