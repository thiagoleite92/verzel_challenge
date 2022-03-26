const router = require('express').Router();

const userController = require('../app/controllers/user');
const { tokenValidation } = require('../app/middlewares/token');

const { loginDataValidation, registerDataValidation, roleValidation } =  require('../app/middlewares/userValidations');

router.post('/login', loginDataValidation, userController.userLogin);

router.use(registerDataValidation)

router.post('/register', userController.userRegister);

router.use(tokenValidation)

router.post('/admin/register', roleValidation, userController.userRegister)

module.exports = router;
