const router = require('express').Router();

const userController = require('../app/controllers/user');

router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);

module.exports = router;
