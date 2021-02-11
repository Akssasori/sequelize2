// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('ship2', 'root', 'coti', {
//   host: 'localhost',
//   dialect: 'mysql'

// });

/*const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('ship', 'root', 'coti', {
  host: 'localhost',
  dialect: 'mysql'
  
});*/

module.exports = {
  database: 'ship2',
  username: 'root',
  password: 'coti',
  host: 'localhost',
  dialect: 'mysql',
  // define:{
  //   timestamps: true,
  //   underscored: true,
  // },

};