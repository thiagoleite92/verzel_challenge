const router = require('express').Router();

const userController = require('../app/controllers/user');

const { loginDataValidation, registerDataValidation } =  require('../app/middlewares/userValidations');

router.post('/login', loginDataValidation, userController.userLogin);
router.post('/register', registerDataValidation, userController.userRegister);

module.exports = router;
