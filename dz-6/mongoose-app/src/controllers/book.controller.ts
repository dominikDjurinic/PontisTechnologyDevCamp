import { Request, Response } from "express";
import { Book } from "../models/book.model";

export const getBooksHandler = async (req: Request, res: Response) => {
  const { author } = req.query;

  if (author) {
    return getBooksByAuthor(req, res);
  }

  return getAllBooks(req, res);
};

//GET /books
export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    return res.json(books);
  } catch {
    return res.status(500).json({ error_code: 500, error: "Greška." });
  }
};

//GET /books/:id
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await Book.findOne({ id: Number(id) });
    if (!book) {
      return res
        .status(404)
        .json({ error_code: 404, error: "Knjiga nije pronađena." });
    }
    return res.json(book);
  } catch {
    return res.status(500).json({ error_code: 500, error: "Greška." });
  }
};

// GET /books?author=Andrić
export const getBooksByAuthor = async (req: Request, res: Response) => {
  try {
    const { author } = req.query;

    const books = await Book.find({
      author: { $regex: String(author), $options: "i" },
    });

    if (books.length === 0) {
      return res.status(404).json({
        error_code: 404,
        error: `Ne postoji knjiga s piscem ${author}`,
      });
    }

    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(500)
      .json({ error_code: 500, error: "Greška pri dohvatu knjiga po autoru." });
  }
};

//POST /books
export const postNewBook = async (req: Request, res: Response) => {
  try {
    const { title, author, isbn, price, inStock } = req.body;

    if (!(await validateBook(res, title, author, price))) return;

    const lastBook = await Book.findOne().sort({ id: -1 });

    const nextId = lastBook ? lastBook.id + 1 : 1;

    const book = await Book.create({
      id: nextId,
      title,
      author,
      isbn,
      price,
      inStock: inStock ?? true,
    });
    return res.status(201).json({ msg: "Nova knjiga stvorena.", book });
  } catch {
    return res
      .status(500)
      .json({ error_code: 500, error: "Greška. Provjerite isbn." });
  }
};

//PUT /books/:id
export const updateBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, author, isbn, price, inStock } = req.body;

    if (!(await validateBook(res, title, author, price))) return;

    const book = await Book.findOneAndUpdate(
      { id: Number(id) },
      { title, author, isbn, price, inStock },
      { new: true, runValidators: true },
    );

    if (!book) {
      return res.status(404).json({
        error_code: 404,
        error: `Knjiga s ID-em '${id}' nije pronađena.`,
      });
    }

    return res.status(200).json({ msg: `Knjiga s id ${id} ažurirana.`, book });
  } catch {
    return res
      .status(500)
      .json({ error_code: 500, error: "Greška. Provjerite isbn." });
  }
};

//DELETE /books/:id
export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const book = await Book.findOneAndDelete({ id: Number(id) });

    if (!book) {
      return res.status(404).json({
        error_code: 404,
        error: `Knjiga s ID-em '${id}' nije pronađena.`,
      });
    }

    return res
      .status(204)
      .send({ msg: `Uspješno obrisana knjiga s id ${id}.` });
  } catch {
    return res.status(500).json({ error_code: 500, error: "Greška." });
  }
};

const validateBook = async (
  res: Response,
  title: string,
  author: string,
  price: number,
) => {
  if (!title || !author || (price !== undefined && price < 0)) {
    res.status(400).json({
      error_code: 400,
      error: "Polja title i author su obavezna, a price mora biti pozitivna.",
    });
    return false;
  }
  return true;
};
