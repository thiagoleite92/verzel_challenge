const userModel = require('../models/user')

const postLogin = async (email, password) => {

	console.log(email)
	const user = await userModel.postLogin(email, password)
	console.log('depopis');

	console.log(user);


	return user;
};

module.exports = {
	postLogin,
};