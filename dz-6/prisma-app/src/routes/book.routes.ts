import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const bookRouter = Router();
const prisma = new PrismaClient();

bookRouter.get("/", async (req: Request, res: Response) => {
  const books = await prisma.book.findMany();
  res.json(books);
});

export default bookRouter;
