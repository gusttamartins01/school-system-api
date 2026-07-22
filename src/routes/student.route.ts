import { Router } from 'express';
import * as StudentController from '../controllers/student.controller.ts';

const router = Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getStudentById);
router.post('/', StudentController.createStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deletreStudent);

export default router;
