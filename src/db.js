let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://dkhtiuhlixbnxh:ec791416b40dcd02e4a65a2807f6612e100f078565cb0c20289e035634cb0fae@ec2-54-159-175-113.compute-1.amazonaws.com:5432/d1gc0oa31nd9m6",
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

