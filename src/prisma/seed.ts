import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'pravdo00@gmail.com' },
    update: {},
    create: {
      userName: 'Pravdo',
      password: 'admin',
      email: 'pravdo00@gmail.com',
      firstName: 'Pravdomir',
      lastName: 'Kostov',
      role: 'ADMIN',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'testtest@gmail.com' },
    update: {},
    create: {
      userName: 'Test',
      password: 'test',
      email: 'testtest@gmail.com',
      firstName: 'Test',
      lastName: 'T',
      role: 'BASIC',
    },
  });

  const course2 = await prisma.course.upsert({
    where: { name: 'NestJS: The Complete Dev Guide' },
    update: {},
    create: {
      name: 'Angular: The Complete Dev Guide',
      description:
        'Build full featured backend APIs incredibly quickly with Angular and Typescript. Includes testing and deployment!',
    },
  });

  const enrollment1 = await prisma.enrollment.upsert({
    where: {
      userId_courseId: {
        userId: user1.id, // Use the actual user ID here
        courseId: course2.cid, // Use the actual course ID here
      },
    },
    update: {},
    create: {
      user: { connect: { id: user1.id } }, // Connects to the user by unique identifier
      course: { connect: { cid: course2.cid } }, // Connects to the course by unique identifier
      status: 'ACTIVE',
      enrollDate: new Date(),
      // The enrollId, createdAt, and updatedAt fields are auto-populated by Prisma/PostgreSQL
    },
  });

  console.log({ user1, user2, course2, enrollment1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
