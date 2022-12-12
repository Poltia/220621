const Sequelize = require("sequelize");

const config = require("../config");
const Block = require("./block");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const DB = {};
DB.sequelize = sequelize;
DB.Block = Block;

Block.init(sequelize);

module.exports = DB;
