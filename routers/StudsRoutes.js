import * as StudentController from "../controllers/StudControllers.js";
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchstudents);

// bookRoutes.post('/new', BookController.createBook);
// bookRoutes.put('/update/:id', BookController.updateBook);
// bookRoutes.delete('/delete/:id', BookController.deleteBook);

export default studentRoutes;