//index(listagem de sessões), show(Lista unica sessão), store(Criar uma sessão), update(alterar uma sessão), destroy(destuir a sessão)

const User = require('../models/User');


//Função para cadastro de Usuários
module.exports = {
   async store(req, res){
       const { email } = req.body;
    
    //Busca na Schema de User se exite o mesmo email cadastrado no banco coloca na variavel user
       let user = await User.findOne({ email });

       //Se não encontrar o usuario/email então cadastrada
       if(!user){
        user = await User.create({ email });
       }
        //fim
       return res.json(user);
    }
};




