const express = require('express');

const route = express.Router();

const { renderGuestPage, signInAndSendStatus, signUpAndSendStatus } = require('../controllers/guestControllers');

route.get('/', renderGuestPage);

route.post('/signin', signInAndSendStatus);

route.post('/signup', signUpAndSendStatus);

module.exports = route;
