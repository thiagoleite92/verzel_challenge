const router = require('express').Router();

const moduleController = require('../app/controllers/module');

router.get('/', moduleController.listModules);
router.post('/newmodule', moduleController.newModule);

module.exports = router;
