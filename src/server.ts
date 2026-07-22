import express from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import notFound from './middlewares/notFound.ts';
import requestLogger from './middlewares/requestLogger.ts';
import StudentRouter from './routes/student.route.ts';
import TeacherRouter from './routes/teacher.route.ts';

const app = express();

app.use(requestLogger);

app.use(express.json());

app.use('/students', StudentRouter);
app.use('/teachers', TeacherRouter);

app.use(notFound);

app.use(errorHandler);

const PORT = Number(process.env.PORT) || 3333;

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
