const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db");
const Disciplina = require("./Disciplina");
const Livro = require("./Livro");

const DisciplinaLivro = db.define("DisciplinaLivro",
    {
        LivroId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Livro, 
                key: 'id'
            }
        },
        DisciplinaId : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Disciplina, 
                key: 'id'
            }
        },
        basico: DataTypes.BOOLEAN
    }
);

Disciplina.belongsToMany(Livro, {through:DisciplinaLivro, as:'livros'});
Livro.belongsToMany(Disciplina, {through:DisciplinaLivro, as:'disciplinas'})
module.exports = DisciplinaLivro;