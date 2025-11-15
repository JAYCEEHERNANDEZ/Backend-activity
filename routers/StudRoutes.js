import * as studentController from "../controllers/StudControllers.js";
import express from "express";

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchstudents);

studentRoutes.post('/new', studentController.createstudent);
studentRoutes.put('/edit/:studentId', studentController.editstudent);
studentRoutes.delete('/delete/:studentId', studentController.deletestudent);

export default studentRoutes;