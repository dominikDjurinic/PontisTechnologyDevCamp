import { Schema, model, Document } from "mongoose";

export interface BookInterface extends Document {
  id: number;
  title: string;
  author: string;
  isbn: string;
  price: number;
  inStock: boolean;
}

const bookSchema = new Schema<BookInterface>(
  {
    id: { type: Number, required: true, unique: true, index: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const Book = model<BookInterface>("Book", bookSchema);
