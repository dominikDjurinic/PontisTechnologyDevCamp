import express from "express";
import mongoose from "mongoose";
import bookRouter from "./routes/book.routes";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/books";
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use("/api/books", bookRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Uspješno spojeno na MongoDB bazu!");
    app.listen(PORT, () => console.log(`Server on :${PORT}`));
  })
  .catch((err) => console.error("Greška pri spajanju na MongoDB:", err));
