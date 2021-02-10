const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ship', 'root', 'coti', {
  host: 'localhost',
  dialect: 'mysql',
  define:{
    timestamps: true,
    underscored: true,
  },
  
});

