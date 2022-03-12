const router = require('express').Router();

const moduleController = require('../app/controllers/module');
const { tokenValidation } = require('../app/middlewares/moduleValidations');

router.get('/', moduleController.listModules);

router.use(tokenValidation);

router.post('/newmodule', moduleController.newModule);

module.exports = router;
