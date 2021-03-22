const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Livro = require("./Livro");

const Edicao = db.define("Edicao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        isbn : DataTypes.STRING,
        numero: DataTypes.STRING,
        ano: DataTypes.INTEGER,
        quantidade: DataTypes.INTEGER,
        cotacao: DataTypes.DOUBLE,
        capa: DataTypes.STRING,

    }
);

Edicao.belongsTo(Livro);
Livro.hasMany(Edicao, {as:"edicoes"});

module.exports = Edicao;