const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'thiago@email.com', name: 'Thiago Leite', password: 'thiago123' },
      { email: 'admin@email.com', name: 'Mr.Dowell', password: 'admin123', role: 'admin' }
    ]
  })
}


main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })