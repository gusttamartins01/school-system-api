import { email, z } from "zod";

export const createStudentSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    matricula: z.string().min(1).max(10),
});

export const updateStudentSchema = z.object({
    name: z.string().min(1).optional(),
    email: z.email().optional(),
    matricula: z.string().min(1).max(10).optional(),
    turma: z.string().min(1).optional(),
});

export type CreateCustomerInput = z.infer<typeof createStudentSchema>;
export type UpdateCustomerInput = z.infer<typeof updateStudentSchema>;


