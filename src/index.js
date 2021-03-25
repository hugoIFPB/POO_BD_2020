require('dotenv').config()
const Route = require('./routes/RouteGeneric')
const Service = require('./service/ServiceGeneric')
const express = require("express"); 
const cors = require('cors');
const Livro = require('./model/Livro');
const Disciplina = require('./model/Disciplina');
const Edicao = require('./model/Edicao');
const DisciplinaLivro = require('./model/DisciplinaLivro')

const bcryptjs = require("bcryptjs");
const Usuario = require("./model/Usuario");
const jwt = require("jsonwebtoken");
const authorization = require("./authorization")

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

Route("/livro",app, new Service(Livro), authorization);
Route("/disciplina",app, new Service(Disciplina), authorization);
Route("/edicao",app, new Service(Edicao), authorization);
Route("/disciplinaLivro",app, new Service(DisciplinaLivro), authorization);

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

async function gerarHash(password) {
  return await bcryptjs.hash(password, 10)
}

app.post("/cadastrar", async (req, res) => {
  const {email, password} = req.body;
  const u = await Usuario.create({email, password:(await gerarHash(password))});
  u.password = undefined;
  res.send(u);
})

app.post("/autenticar", async (req, res) => {
  const {email, password} = req.body;
  const usu = await Usuario.findByPk(email);
  if(!usu || !password) {
    res.status(400).send("Credenciais inválidas");
  } else if(bcryptjs.compareSync(password, usu.password)){
    const token = jwt.sign(
      {email},
      process.env.SECRET,
      {expiresIn:3600}
    );
    res.send({email, token})
  } else {
    res.status(400).send("Credenciais inválidas")
  }
})


app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}`);
})