const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-xkyqb.mongodb.net/week9?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


//para registringir o acesso a aplicação
//app.use(cors({ origin: 'http://localhost:3333' }));

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);





/*
//Comentários 

req.query = Acessar query params enviado através da URL ficando exposto a variável e seu valor

req.params = Acessar route params método muito usado para delete e update pega o valor informado 

req.body = Acessar corpo da requisição(Cadastro e edição)


//para a utilização de formatos JSON em requisições
//app.use(express.json());

*/