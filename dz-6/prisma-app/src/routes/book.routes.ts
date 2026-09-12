import { Router } from "express";
import {
  deleteBookById,
  getAllBooks,
  getBookById,
  getBooksHandler,
  postNewBook,
  updateBookById,
} from "../controllers/book.controller";

const bookRouter = Router();

//GET /books
bookRouter.get("/", getBooksHandler);

//GET /books/:id
bookRouter.get("/:id", getBookById);

//POST /books
bookRouter.post("/", postNewBook);

//PUT /books/:id
bookRouter.put("/:id", updateBookById);

//DELETE /books/:id
bookRouter.delete("/:id", deleteBookById);

export default bookRouter;
