import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.book.deleteMany();

  await prisma.book.createMany({
    data: [
      {
        title: "Na Drini ćuprija",
        author: "Ivo Andrić",
        isbn: "978-86-7019-211-9",
        price: 19.99,
        inStock: true,
      },
    ],
  });

  console.log("Seed done");
  await prisma.$disconnect();
}

main();
