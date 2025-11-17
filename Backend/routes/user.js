
const express = require('express');
const userRegister = require('../controller/user.js');
const userRoutes = express.Router();



userRoutes.post('/register', userRegister);


module.exports = userRoutes;

