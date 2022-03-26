const userService = require('../services/user');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await userService.userLogin(email, password);

    return response.message
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.user);
  } catch (e) {

    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const userRegister = async (req, res) => {
  try {
    const { name, password, email, role = 'user' } = req.body;

    const registerData = {
      name, password, email, role
    }

    const response = await userService.userRegister(registerData);

    return response.message
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.register);

  } catch(e) {
    return res.status(500).json({message: 'Something went wrong'});
  }
};

module.exports = {
  userLogin,
  userRegister
};
