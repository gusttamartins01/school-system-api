import { email, z } from "zod";

export const createStudentSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    matricula: z.string().min(1).max(10),
});



