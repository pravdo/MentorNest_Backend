import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const passwordPravdo = await bcrypt.hash('admin', roundsOfHashing);
  const passwordTest = await bcrypt.hash('test3', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'pravdo00@gmail.com' },
    update: {
      password: passwordPravdo,
    },
    create: {
      userName: 'Pravdo',
      password: passwordPravdo,
      email: 'pravdo00@gmail.com',
      firstName: 'Pravdomir',
      lastName: 'Kostov',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'testtest@gmail.com' },
    update: {
      password: passwordTest,
    },
    create: {
      userName: 'Test',
      password: passwordTest,
      email: 'testtest@gmail.com',
      firstName: 'Test',
      lastName: 'T',
      role: 'BASIC',
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
