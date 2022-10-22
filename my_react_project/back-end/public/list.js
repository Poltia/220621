const Sequelize = require("sequelize");

class List extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                writer: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                title: {
                    type: Sequelize.STRING(225),
                    allowNull: false,
                },
                content: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: "List",
                tableName: "lists",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
}

module.exports = List;
