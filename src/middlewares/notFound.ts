import type { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors/index.ts';

export default function notFound(
	_request: Request,
	_response: Response,
	next: NextFunction,
) {
	next(new NotFoundError('Rota não encontrada'));
}
