import mongoose from "mongoose";
import { Book } from "./models/book.model";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/books";

const initialBooks = [
  {
    id: 1,
    title: "Na Drini ćuprija",
    author: "Ivo Andrić",
    isbn: "978-86-7019-211-9",
    price: 19.99,
    inStock: true,
  },
  {
    id: 2,
    title: "Čudnovate zgode šegrta Hlapića",
    author: "Ivana Brlić-Mažuranić",
    isbn: "978-953-0-60111-2",
    price: 12.99,
    inStock: true,
  },
  {
    id: 3,
    title: "Zlatarovo zlato",
    author: "August Šenoa",
    isbn: "978-953-150-555-0",
    price: 16,
    inStock: false,
  },
  {
    id: 4,
    title: "Vlak u snijegu",
    author: "Mato Lovrak",
    isbn: "978-953-0-60444-1",
    price: 10.99,
    inStock: true,
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);

    await Book.deleteMany({});

    await Book.insertMany(initialBooks);

    console.log("Seeded");
  } catch (error) {
    console.error("Greška pri seedanju baze:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Odspojeno s baze.");
    process.exit(0);
  }
}

seed();
