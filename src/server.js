require('dotenv').config()
const express = require("express"); 
const Livro = require('./model/Livro');

const app = express();

app.get("/", (req, res) => {
    res.send("Bom diiiiiiiiaaaaa!!!!")
});

app.get("/livro/", async (req, res) => {
    let livros = await Livro.findAll();
    res.send(livros);
});

app.post("livro", async (req, res) => {
    let livros = await Livro.create({titulo:"Algum Livro", autores:"Autor do Livro"});
    res.send(livros);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})