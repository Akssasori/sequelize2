// const Sequelize = require('sequelize');
// const dbConfig = require('../config/database');
// let connection;
// try {
//   const User = require('../models/User');
//   connection = new Sequelize(dbConfig);
//   User.init(connection);
//   User.associate(connection.models);
// } catch(err) {
//   if(err) console.log(err);
// }

// module.exports = connection;

const Sequelize = require('sequelize');
let connection;
try {
  const User = require('../models/User');
  const Address = require('../models/Address');
  connection = new Sequelize('ship22', 'root', 'coti', {
  host: 'localhost',
  dialect: 'mysql'
  
});
  User.init(connection);
  Address.init(connection);

  User.associate(connection.models);
  Address.associate(connection.models);
} catch(err) {
  if(err) console.log(err);
}

module.exports = connection;