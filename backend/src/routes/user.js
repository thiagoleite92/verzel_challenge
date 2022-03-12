const router = require('express').Router();

const userController = require('../app/controllers/user');

const { loginDataValidation } =  require('../app/middlewares/userValidations');

router.post('/login', loginDataValidation, userController.userLogin);
router.post('/register', userController.userRegister);

module.exports = router;
