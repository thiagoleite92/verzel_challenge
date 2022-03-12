const userModel = require("../models/user");

const postLogin = async (email, password) => {
  const user = await userModel.postLogin(email, password);

  if (user.message) {
    return { status: 400, message: user.message };
  }

  return user;
};

module.exports = {
  postLogin,
};
