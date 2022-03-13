const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { email: 'thiago@email.com', name: 'Thiago Leite', password: 'thiago123' },
      { email: 'admin@email.com', name: 'Mr.Dowell', password: 'admin123', role: 'admin' }
    ]
  });

  await prisma.module.createMany({
    data: [
      { module: 'Fundamentos Web - HTML & CSS'},
      { module: 'JavaScript para iniciantes'}
    ]
  });

  await prisma.lecture.createMany({
    data: [
      { lecture: 'HTML 1', moduleId: 1, startDate: new Date('2022-03-14')},
      { lecture: 'CSS 1', moduleId: 1, startDate: new Date('2022-03-15')},
      { lecture: 'Constantes e Variáveis', moduleId: 2, startDate: new Date('2022-03-21')},
      { lecture: 'Loops e Ifs', moduleId: 2, startDate: new Date('2022-03-22')},
    ]
  });
}


main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });