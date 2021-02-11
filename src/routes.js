const express = require('express');
const UserController = require(__dirname +'/controllers/UserController');
const AddressController = require(__dirname +'/controllers/AddressController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:userId/addresses', AddressController.store);

module.exports = routes;