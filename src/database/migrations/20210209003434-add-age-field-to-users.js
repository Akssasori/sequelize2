'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'age',
      {
        type: Sequelize.STRING,
      },
      
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'age',
    );
  },
};

