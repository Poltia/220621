const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id: {
                    type: Sequelize.STRING(225),
                    allowNull: false,
                    unique: true,
                },
                password: {
                    type: Sequelize.STRING(225),
                    allowNull: false,
                },
                phone: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                email: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                package: {
                    type: Sequelize.STRING(225),
                    allowNull: true,
                },
                air_date: {
                    type: Sequelize.DATE,
                },
                air_destination: {
                    type: Sequelize.STRING(225),
                    allowNull: true,
                },
                air_seat: {
                    type: Sequelize.STRING(225),
                },
                hotel: {
                    type: Sequelize.STRING(225),
                    allowNull: true,
                },
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

module.exports = User;
