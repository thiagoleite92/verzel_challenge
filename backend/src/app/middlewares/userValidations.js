const validateEmail = (email) => {
  const validEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  const verifyEmail = validEmail.test(email);

  return verifyEmail ? true : false;
};

const loginDataValidation = (req, res, next) => {
  const fields = ['email', 'password'];

  const { body } = req;

  for (let field of fields) {
    if (!body[field]) {
      return res.status(400).json({ message: 'All fields are required.'});
    }
  }

  if (!validateEmail(body.email)) {
    return res.status(400).json({ message: 'Invalid email address'});
  }

  next();
};

// const registerDataValidation = (req, res, next) => {
//   const fields
// }

module.exports = {
  loginDataValidation,
};