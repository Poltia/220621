const Sequelize = require("sequelize");

class user extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id: {},
                user_password: {},
                Phone: {},
                Email: {},
            },
            {
                sequelize,
                timestamps: true,
                modelName: "User",
                tableName: "users",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
}

module.exports = user;
