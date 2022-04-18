const Sequelize = require("sequelize");

//DB Connection
const sequelize = new Sequelize("tutorial_node", "root", "", {
    host: "localhost",
    dialect: "mysql",
    query: { raw: true },
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};
