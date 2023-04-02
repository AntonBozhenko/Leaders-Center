const express = require('express');

const route = express.Router();

const { isAuth } = require('../middlewares/midls');

const { renderMainPage, logOut } = require('../controllers/indexControllers');

route.get('/', isAuth, renderMainPage);

route.get('/logout', isAuth, logOut);

module.exports = route;
