'use strict';

const helper = require('../helpers');

let password = '$2b$10$iZzRerTJJbYTGxm7Rx.4fe8rKc6iLNQMM4gKJZa6yQTxq65KjEME2' // '123456'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'superadmin@expressnext.com',
      username: 'superadminnext',
      password,
    }, {
      email: 'admin@expressnext.com',
      username: 'adminnext',
      password,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
