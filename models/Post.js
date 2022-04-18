const db = require("./db");

const Post = db.sequelize.define("posts", {
    title: {
        type: db.Sequelize.STRING,
    },
    body: {
        type: db.Sequelize.TEXT,
    },
});

Post.sync();

module.exports = Post;
