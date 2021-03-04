let db = require("./db");
let Aluno = require("./model/Aluno");

async function sincronizar() {
    await db.sync();
}

async function inserir(obj) {
    let res = await Aluno.create(obj)
    console.log(res);
}

// let a1 = {nome: "Fulano", endereco: "Rua do Fulano"};
// inserir(a1);

async function consultar() {
    let resultado = await Aluno.findAll();
    console.log(resultado);
}
consultar();