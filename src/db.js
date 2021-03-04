let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://bfbepbchjdxjpb:ddc9173d918036fcc1512996f012590c7358d685b2019f9c4b4f9e2ff68906ad@ec2-54-196-111-158.compute-1.amazonaws.com:5432/dc2m4eq0n5u965",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, // very important
            }
        }
    });

module.exports = db;

