const userService = require('../services/user');

const postLogin = async (req, res) => {
	const { email, password } = req.body;
  console.log(email, 'controller')
  console.log(password, 'controller')

	const user = await userService.postLogin(email, password);

	console.log(user);

	return res.status(200).json({user});
};

module.exports = {
	postLogin
};