const validEmail = (email) => {
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return !!emailValid.test(email);
};

const validPassword = (password) => {
  const passwordLength = 5;

  return password.length > passwordLength;
};

export {
  validEmail,
  validPassword,
};
