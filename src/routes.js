const express = require('express');
const UserController = require('./controllers/UserController');
// const User = require("./models/User")

const routes = express.Router();


// routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// if (User.name.length == undefined || User.email.length == undefined ) {
//     User.name = "Lucas",
//     User.email = "diniz3003@gmail.com"
//   } 



// routes.get('/',(req,res)=>{
//     return res.json({hello:'word'});
// })

module.exports = routes;