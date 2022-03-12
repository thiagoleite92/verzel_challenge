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

module.exports = {
  userLogin,
};
