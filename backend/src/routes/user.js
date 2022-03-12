const router = require('express').Router();

const userController = require('../app/controllers/user');

router.post('/login', userController.postLogin);

module.exports = router;