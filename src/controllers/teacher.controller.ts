import type { Request, Response } from 'express';
import * as TeacherService from '../services/teacher.service.ts';
import type { CreateTeacher, UpdateTeacher } from '../types.ts';

export function getAllTeacher(_reqeust: Request, response: Response) {
	const teacher = TeacherService.findAllTeachers();

	response.status(200).json(teacher);
}

export function getTeacherById(reqeust: Request, response: Response) {
	const id = Number(reqeust.params.id);

	const teacher = TeacherService.findTeacherById(id);

	response.status(200).json(teacher);
}

export function createTeacher(reqeust: Request, response: Response) {
	const { name, email, cod_rp } = reqeust.body as CreateTeacher;

	const teacher = TeacherService.insertTeacher({ name, email, cod_rp });

	response.status(201).json(teacher);
}

export function updateTeacher(reqeust: Request, response: Response) {
	const id = Number(reqeust.params.id);
	const { name, email, cod_rp, turma } = reqeust.body as UpdateTeacher;

	const teacher = TeacherService.modidyTeacher(id, {
		name,
		email,
		cod_rp,
		turma,
	});

	response.status(200).json(teacher);
}

export function deleteTeacher(reqeust: Request, response: Response) {
	const id = Number(reqeust.params.id);

	TeacherService.removeTecaher(id);

	response.status(204).send();
}
