import { Router } from 'express';
import * as StudentController from '../controllers/student.controller.ts';
import validate from '../middlewares/validate.ts'
import  { 
    createStudentSchema,
    updateStudentSchema
} from '../schemas/student.schema.ts'


const router = Router();

router.get('/', StudentController.getAllStudent);
router.get('/:id', validate(createStudentSchema), StudentController.getStudentById);
router.post('/', validate(updateStudentSchema), StudentController.createStudent);
router.put('/:id', StudentController.updateStudent);
router.delete('/:id', StudentController.deleteStudent);

export default router;
