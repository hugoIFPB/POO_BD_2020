let Sequelize = require("sequelize");

let db = new Sequelize(
    "",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        },
        define: {
            freezeTableName: true
        }
    }
);

module.exports = db;

