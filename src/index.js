require('dotenv').config()
const { Op, Model } = require('sequelize');
let db = require("./db");
const Disciplina = require('./model/Disciplina');
const DisciplinaLivro = require('./model/DisciplinaLivro');
const Edicao = require('./model/Edicao');
const Livro = require('./model/Livro');

async function sincronizar() {
    await db.sync({force: true});
}

async function inserir() {
    let livro = {titulo: "Arquitetura PERN", autores: "Sicrano"};
    /*
    Postgres
    Express
    React
    Node
    */
    
    livro = await Livro.create(livro);
    Edicao.create({quantidade:3, LivroId: livro.id}); 
    //console.log(res);
}

// 
// inserir(a1);

async function consultar() {
    /*let livros =  await Livro.findAll({
        where: {
            titulo: {
                [Op.like]: "Arquitetura%"
            }
        }
    }
    );
    console.log(livros);
    */
    let livro = await Livro.findOne(
        {
            where: {
                id:4
            }
        }
    );
    //let ed = Edicao.findOne();
    //ed.getLivro();
    console.log((await livro.getEdicoes()));
}
//sincronizar();
//inserir();
consultar();