const loginDataValidation = (req, res, next) => {
  const fields = ['email', 'password'];
  const validEmail = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?$/i;

  const { body } = req;

  for (let field of fields) {
    if (!body[field]) {
      return res.status(400).json({ message: 'All fields are required.'});
    }
  }

  if (!validEmail.test(body.email)) {
    return res.status(400).json({ message: 'Invalid email'});
  }

  next();
};

module.exports = {
  loginDataValidation,
};