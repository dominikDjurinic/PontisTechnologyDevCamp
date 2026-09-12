import express from "express";
import bookRouter from "./routes/book.routes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hello DevCamp!" }));

app.use("/books", bookRouter);

app.listen(PORT, () => console.log(`Server on :${PORT}`));
