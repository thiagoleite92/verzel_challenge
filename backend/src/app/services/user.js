const userModel = require('../models/user');

const userLogin = async (email, password) => {
  const user = await userModel.userLogin(email, password);

  if (user.message) {
    return { status: 400, message: user.message };
  }

  return { status: 200, user };
};

const userRegister = async ({name, email, password}) => {
  const register = await userModel.userRegister(name, email, password);

  if (register.message) {
    return { status: 409, message: register.message };
  }

  return { status: 200, register };
};

module.exports = {
  userLogin,
  userRegister
};
