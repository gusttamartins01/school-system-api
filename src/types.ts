export type Student = {
	id: number;
	name: string;
	email: string;
	matricula: string;
	turma: string;
};

export type CreateStudent = Omit<Student, 'id' | 'turma'>;
export type UpdateStudent = Partial<Omit<Student, 'id'>>;

export type Teacher = {
	id: number;
	name: string;
	email: string;
	cod_rp: string;
	turma: string;
};


