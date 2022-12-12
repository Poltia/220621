const Sequelize = require("sequelize");

class Block extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                parentHash: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                sha3Uncles: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                miner: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                stateRoot: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                transactionsRoot: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                receiptsRoot: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                difficulty: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                number: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                gasLimit: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                gasUsed: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                timestamp: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                extraData: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                mixHash: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                nonce: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                baseFeePerGas: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                hash: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                size: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: "Block",
                tableName: "Blocks",
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }
}

module.exports = Block;
