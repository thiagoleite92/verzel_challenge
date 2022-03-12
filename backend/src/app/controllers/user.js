const userService = require('../services/user');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await userService.userLogin(email, password);

    if (response.message) {
      return res.status(response.status).json({ message: response.message });
    }

    return res.status(response.status).json(response.user);
  } catch (e) {

    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const userRegister = async (req, res) => {
  try {
    const { body } = req;

    const response = await userService.userRegister(body);

    if (response.message) {
      return res.status(response.status).json({message: response.message});
    }

    return res.status(response.status).json(response.register);
  } catch(e) {
    return res.status(500).json({message: 'Something went wrong'});
  }
};

module.exports = {
  userLogin,
  userRegister
};
