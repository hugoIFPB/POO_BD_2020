
const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");


const Disciplina = db.define("Disciplina",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        codigoSuap: DataTypes.STRING,
        curso: DataTypes.STRING
    }
);

module.exports = Disciplina;