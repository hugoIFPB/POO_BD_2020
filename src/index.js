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
    let livro = {titulo: "Arquitetura MERN", autores: "Sicrano"};
    livro = await Livro.create(livro);
    Edicao.create({quantidade:3, LivroId: livro.id}); 
    livro = await Livro.create({titulo: "Arquitetura PERN", autores: "Fulano"});
    Edicao.create({quantidade:2, LivroId: livro.id}); 
    livro = await Livro.create({titulo: "Arquitetura MEAN", autores: "Fulano"});
    Edicao.create({quantidade:5, LivroId: livro.id}); 
    livro = await Livro.create({titulo: "Javascript com Node", autores: "Beltrano"});
    Edicao.create({quantidade:1, LivroId: livro.id}); 
    livro = await Livro.create({titulo: "React com Hooks", autores: "Sicrano"});
    Edicao.create({quantidade:2, LivroId: livro.id}); 
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
//consultar();