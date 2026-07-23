import { NotFoundError } from '../errors/index.ts';
import { students } from '../mocks/students.mock.ts';
import type {
	CreateStudentInput,
	UpdateStudentInput,
} from '../schemas/student.schema.ts';
import type { Student } from '../types.ts';

export function findAllStudents(): Student[] {
	return students;
}

export function findStudentsById(id: number): Student {
	const student = students.find((s) => s.id === id);

	if (!student) throw new NotFoundError('Estudante não encontrado!');

	return student;
}

export function insertStudents({
	name,
	email,
	matricula,
}: CreateStudentInput): Student {
	const student: Student = {
		id: students[students.length - 1].id + 1,
		name: name,
		email: email,
		matricula: matricula,
		turma: 'fs-57',
	};

	students.push(student);

	return student;
}

export function modifyStudents(
	id: number,
	{ name, email, matricula, turma }: UpdateStudentInput,
): Student {
	const student = students.find((s) => s.id === id);

	if (!student) throw new NotFoundError('Estudante não encontrado!');

	if (name) student.name = name;
	if (email) student.email = email;
	if (matricula) student.matricula = matricula;
	if (turma) student.turma = turma;

	return student;
}

export function deleteStudents(id: number): void {
	const index = students.findIndex((s) => s.id === id);

	if (index === -1) throw new Error('Estudante não encontrado!');

	students.splice(index, 1);
}
