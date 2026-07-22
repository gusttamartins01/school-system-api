import type { Request, Response } from 'express';
import * as StudentService from '../services/student.service.ts';
import type { CreateStudent, UpdateStudent } from '../types.ts';

export function getAllStudent(_request: Request, response: Response) {
	const student = StudentService.findAllStudents();

	response.status(200).json(student);
}

export function getStudentById(request: Request, response: Response) {
	const id = Number(request.params.id);

	const student = StudentService.findStudentsById(id);

	response.status(200).json(student);
}

export function createStudent(request: Request, response: Response) {
	const { name, email, matricula } = request.body as CreateStudent;

	const student = StudentService.insertStudents({ name, email, matricula });

	response.status(201).json(student);
}

export function updateStudent(request: Request, response: Response) {
	const id = Number(request.params.id);
	const { name, email, matricula, turma } = request.body as UpdateStudent;

	const student = StudentService.modifyStudents(id, {
		name,
		email,
		matricula,
		turma,
	});

	response.status(200).json(student);
}

export function deletreStudent(request: Request, response: Response) {
	const id = Number(request.params.id);

	StudentService.deleteStudents(id);

	response.status(204).send();
}
