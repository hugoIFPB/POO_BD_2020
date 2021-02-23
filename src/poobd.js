/*
Create 
Read
Update
Delete
*/
const {Pool} = require("pg");
async function criarConexao() {
    const pool = new Pool({
        connectionString: '', // Adicionar as configurações do Banco de vocês
        ssl: {
            rejectUnauthorized: false
        }
    });

    let con = await pool.connect();
    /*let res = await con.query(`
        create table aluno(
            id serial primary key, 
            nome varchar
        )`
    );*/
 
    // await con.query("insert into aluno (nome) values ($1)",["Sicrano"]); // evita  SQL Injection
    // await con.query("insert into aluno (nome) values ($1)",["Beltrano"]);
    // await con.query("insert into aluno (nome) values ($1), ($2), ($3)",["aluno1", "aluno2", "aluno3"]);
    // await con.query("update aluno set nome = $1 where id = $2", ["Aluno 1", 5]);
    // await con.query("delete from aluno where upper(nome) like 'ALUNO%'");
    // await con.query("delete from aluno");
    await con.query("drop table aluno");
    let res = await con.query("select * from aluno");
    let tuplas = res.rows;
    for(let tupla of tuplas) {
        console.log(tupla);
    }
    con.release();
}

criarConexao();
