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
      {
        title: "Čudnovate zgode šegrta Hlapića",
        author: "Ivana Brlić-Mažuranić",
        isbn: "978-953-0-60111-2",
        price: 12.99,
        inStock: true,
      },
      {
        title: "Zlatarovo zlato",
        author: "August Šenoa",
        isbn: "978-953-150-555-0",
        price: 16,
        inStock: false,
      },
      {
        title: "Vlak u snijegu",
        author: "Mato Lovrak",
        isbn: "978-953-0-60444-1",
        price: 10.99,
        inStock: true,
      },
    ],
  });

  console.log("Seed done");
  await prisma.$disconnect();
}

main();
