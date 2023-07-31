import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

type SeedData = Array<{
  username: string;
  email: string;
  task: string;
  completed: boolean;
  edited: boolean;
  createdAt: Date;
  updatedAt: Date;
}>;

function asUTC(date: Date) {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

function fromNow(days: number) {
  return asUTC(
    new Date(asUTC(new Date()).getTime() + 1000 * 60 * 60 * 24 * days)
  );
}

async function seed() {
  // cleanup the database
  await prisma.user.deleteMany({});
  await prisma.todo.deleteMany({});

  const hashedPassword = await bcrypt.hash("123", 10);
  await prisma.user.create({
    data: {
      username: "admin",
      password: hashedPassword,
    },
  });

  const seedData: SeedData = [
    {
      username: "Erlan",
      email: "karagullov01@gmail.com",
      task: "Repair the car",
      completed: false,
      edited: true,
      createdAt: fromNow(-1),
      updatedAt: fromNow(-1),
    },
    {
      username: "Azat",
      email: "erlank123456789@gmail.com",
      task: "Read Robert Lafore",
      completed: true,
      edited: false,
      createdAt: fromNow(0),
      updatedAt: fromNow(0),
    },
  ];

  for (const data of seedData) {
    await prisma.todo.create({ data });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
