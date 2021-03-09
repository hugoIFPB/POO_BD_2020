const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");

const Livro = db.define("Livro",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo : {
            type: DataTypes.STRING,
            allowNull: false
        },
        autores: {
            type: DataTypes.STRING,
            allowNull: false
        },
        editora: DataTypes.STRING
    }
);

module.exports = Livro;