import * as BookController from "../controllers/BookController.js";
import express from "express";

const bookRoutes = express.Router();

bookRoutes.get('/all', BookController.fetchBooks);

// bookRoutes.post('/new', BookController.createBook);
// bookRoutes.put('/update/:id', BookController.updateBook);
// bookRoutes.delete('/delete/:id', BookController.deleteBook);

export default bookRoutes;