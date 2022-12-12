const dot = require("dotenv");
dot.config();

const config = {
    dev: {
        username: "root",
        password: process.env.DATABASE,
        database: "BlockTest",
        host: "127.0.0.1",
        dialect: "mysql",
    },
};

module.exports = config;
