const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Aluno = db.define("Aluno",
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
        endereco: DataTypes.STRING
    }
);

module.exports = Aluno;