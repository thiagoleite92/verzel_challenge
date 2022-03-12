const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

const postLogin =  async (email, password) => {
  console.log(email)
  const user = await prisma.user.findUnique({
    where: { email }
  })

  return user
}

module.exports = {
  postLogin
}