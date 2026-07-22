import { NotFoundError } from '../errors/index.ts';
import { teachers } from '../mocks/teachers.mock.ts';
import type { CreateTeacher, Teacher, UpdateTeacher } from '../types.ts';

export function findAllTeachers(): Teacher[] {
	return teachers;
}

export function findTeacherById(id: number): Teacher {
	const teacher = teachers.find((t) => t.id === id);

	if (!teacher) throw new NotFoundError(`Professor não encontrado`);

	return teacher;
}

export function insertTeacher({ name, email, cod_rp }: CreateTeacher): Teacher {
	const teacher: Teacher = {
		id: teachers[teachers.length - 1].id + 1,
		name: name,
		email: email,
		cod_rp: cod_rp,
		turma: 'fs-57',
	};

	teachers.push(teacher);

	return teacher;
}

export function modidyTeacher(
	id: number,
	{ name, email, cod_rp, turma }: UpdateTeacher,
): Teacher {
	const teacher = teachers.find((t) => t.id === id);

	if (!teacher) throw new NotFoundError(`Professor não encontrado`);

	if (name) teacher.name = name;
	if (email) teacher.email = email;
	if (cod_rp) teacher.cod_rp = cod_rp;
	if (turma) teacher.turma = turma;

	return teacher;
}

export function removeTecaher(id: number): void {
	const index = teachers.findIndex((t) => t.id === id);

	if (index === -1) throw new Error('Professor não encontrado!');

	teachers.splice(index, 1);
}
