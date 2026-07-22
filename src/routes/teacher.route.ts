import { Router } from 'express';
import * as TeacherController from "../controllers/teacher.controller.ts"

const router = Router();


router.get('/', TeacherController.getAllTeacher);
router.get('/:id', TeacherController.getTeacherById);
router.post('/', TeacherController.createTeacher);
router.put('/:id', TeacherController.updateTeacher);
router.delete('/:id', TeacherController.deleteTeacher);

export default router;