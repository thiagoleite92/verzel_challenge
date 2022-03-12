const userModel = require('../models/user');

const userLogin = async (email, password) => {
  const user = await userModel.userLogin(email, password);

  if (user.message) {
    return { status: 400, message: user.message };
  }

  return { status: 200, user };
};

module.exports = {
  userLogin,
};
