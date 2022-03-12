const userService = require('../services/user');

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.postLogin(email, password);

    if (user.message) {
      return res.status(user.status).json({ message: user.message });
    }

    return res.status(200).json({ user });
  } catch (e) {
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  postLogin,
};
