const moduleService = require('../services/module');

const listModules = async (req, res) => {
  console.log('oi');
  try {
    const modules = await moduleService.listModules();

    return res.status(200).json(modules);
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  listModules,
};