const User = require('../models/User');


module.exports = {
  async store(req, res) { //async

    try {

      const { name, email } = req.body;

      if (typeof name === "undefined" || typeof email === "undefined") {
        return res.json({ error: "nome e/ou email undefined" });

      } else {

        const user = await User.create({ name, email }); //aguarda a resposta do User.create;
        if (user) { // verifica se o User.create ja respondeu;
          if (user.name && user.email)
            return res.json(user); // retorna com "user" se houverem name e email no response do User.create;

          return res.json({ error: '"user.name"&&"user.email" == undefined' }); // retorna com a mensagem de erro, caso não tenha name e email no response do User.create;
        }

      }
    } catch(err){
      if (err) console.log(err); // mostra o erro ocorrido no User.create;
      return res.json({ error: 1 }); // retorna com erro code 1, caso de erro no User.create;
    }
    
    
    
    
  },

  async index(req,res){

    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      if (err) console.log(err);
    }
    

    
  }


};
