import { Router } from 'express';
import * as StudentController from '../controllers/student.controller.ts';
import validate from '../middlewares/validate.ts';
import {
	createStudentSchema,
	updateStudentSchema,
} from '../schemas/student.schema.ts';

const router = Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', StudentController.getStudentById);
router.post(
	'/',
	validate(createStudentSchema),
	StudentController.createStudent,
);
router.put(
	'/:id',
	validate(updateStudentSchema),
	StudentController.updateStudent,
);
router.delete('/:id', StudentController.deleteStudent);

export default router;
