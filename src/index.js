let db = require("./db");
let Aluno = require("./model/Aluno");

async function sincronizar() {
    await db.sync({force: true});
}

async function inserir() {
    let obj = {nome: "Fulano", endereco: "Rua do Fulano"};
    let res = await Aluno.create(obj)
    console.log(res);
}

// 
// inserir(a1);

async function consultar() {
    let resultado = await Aluno.findAll();
    console.log(resultado[0]);
}
sincronizar();