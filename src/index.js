require('dotenv').config()
const { Op } = require('sequelize');
let db = require("./db");
const Disciplina = require('./model/Disciplina');
const DisciplinaLivro = require('./model/DisciplinaLivro');
const Edicao = require('./model/Edicao');
const Livro = require('./model/Livro');

async function sincronizar() {
    await db.sync({force: true});
}

async function inserir() {
    let livro = {titulo: "Arquitetura PERN", autores: "Fulano"};
    livro = await Livro.create(livro);
    Edicao.create({quantidade:5, LivroId: livro.id}); 
    //console.log(res);
}

// 
// inserir(a1);

async function consultar() {
    let ed = await Livro.findOne(
        {
            where: {
                id:{
                    [Op.eq]:2
                }
            }
        }
    );
    console.log((await ed.getEdicoes()));
}
//sincronizar();
//inserir();
consultar();