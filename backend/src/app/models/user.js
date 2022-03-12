const { PrismaClient } = require('@prisma/client');
const { createToken } = require('../middlewares/token');

const prisma = new PrismaClient();

const findUser = async (email, password) => {
  const user = await prisma.user.findMany({
    where: {
      AND: [{ email }, { password }],
    },
  });

  if (user.length === 0) {
    return { message: 'User not found' };
  }

  return user;
};

const userLogin = async (email, password) => {
  const userFound = await findUser(email, password);

  if (userFound.message) {
    return userFound;
  }

  const { name, role } = userFound[0];

  const dataToken = { name, role, email };

  const token = createToken(dataToken);

  return { name, role, token };
};

const userRegister = async (name, email, password) => {
  try {
    const { role } = await prisma.user.create({
      data: {
        email, password, name
      }
    });

    const dataToken = { name, role, email };

    const token = createToken(dataToken);

    return { name, role, token };
  } catch (e) {
    return { message: 'Email already registered.'};
  }

};

module.exports = {
  userLogin,
  userRegister,
};
