const userService = require('../services/user');

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await userService.userLogin(email, password);

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.lectures);
      
  } catch (e) {

    return res.status(500).json({ message: 'Something went wrong' });
  }
};

const userRegister = async (req, res) => {
  try {
    const { body } = req;

    const response = await userService.userRegister(body);

    return response.message 
      ? res.status(response.status).json(response.message)
      : res.status(response.status).json(response.lectures);

  } catch(e) {
    return res.status(500).json({message: 'Something went wrong'});
  }
};

module.exports = {
  userLogin,
  userRegister
};
