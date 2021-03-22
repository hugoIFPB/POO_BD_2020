require('dotenv').config()
//const Route = require('./routes/RouteGeneric')
//const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Livro = require('./model/Livro');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.json({ message: 'API de Livros ativa!!!' })
});

app.get("/livro", async (req, res) => {
  let livros = await Livro.findAll(); 
  res.json(livros);
});

app.get("/livro/:id", async (req, res) => {
  let livro = await Livro.findByPk(req.params.id); 
  res.json(livro);
});


// Route("/livro",app, new Service(Livro));


app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})