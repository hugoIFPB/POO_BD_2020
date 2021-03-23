require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Livro = require('./model/Livro');
const Disciplina = require('./model/Disciplina');
const Edicao = require('./model/Edicao');
const DisciplinaLivro = require('./model/DisciplinaLivro')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: 'API de Livros ativa!!!' })
});

/*app.get("/livro", async (req, res) => {
  let livros = await Livro.findAll(); 
  res.json(livros);
});

app.get("/livro/:id", async (req, res) => {
  let livro = await Livro.findByPk(req.params.id); 
  res.json(livro);
});
*/

Route("/livro",app, new Service(Livro));
Route("/disciplina",app, new Service(Disciplina));
Route("/edicao",app, new Service(Edicao));
Route("/disciplinaLivro",app, new Service(DisciplinaLivro));

app.get("/livro/:id/edicao", async (req, res) => {
  const edicoes = await Edicao.findAll({where:{LivroId:req.params.id}});
  res.send({edicoes});
});

app.get("/livro/:id/disciplina", async (req, res) => {
  const disciplinas = await Livro.findAll(
    {
      where:{id:req.params.id}, 
      include:[
        {model: Disciplina, as:'disciplinas'}
      ]
    }
  );
  res.send(disciplinas)

}) 



app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})