const validateEmail = (email) => {
  const validEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  const verifyEmail = validEmail.test(email);

  return verifyEmail ? true : false;
};

const validatePassword = (password) => {
  const PASSWORD_LENGTH = 6;

  return password.length >= PASSWORD_LENGTH ? true : false;
};

const loginDataValidation = (req, res, next) => {
  const loginFields = ['email', 'password'];

  const { body } = req;

  for (let field of loginFields) {
    if (!body[field]) {
      return res.status(400).json({ message: `${field}is Required` });
    }
  }

  if (!validateEmail(body.email)) {
    return res.status(400).json({ message: 'Invalid email address'});
  }

  next();
};

const registerDataValidation = (req, res, next) => {
  const registerFields = ['name', 'email', 'password'];

  const { body } = req;

  for (let field of registerFields) {
    if (!body[field]) {
      return res.status(400).json({ message: `${field}is Required` });
    }
  }

  if (!validateEmail(body.email)) {
    return res.status(400).json({ message: 'Invalid email address'});
  }

  if (!validatePassword(body.password)) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  next();
};

module.exports = {
  loginDataValidation,
  registerDataValidation,
};