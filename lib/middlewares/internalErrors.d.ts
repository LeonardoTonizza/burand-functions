import { NextFunction, Request, Response } from 'express';
/**
 * Middleware responsável por tratar erros internos da aplicação.
 *
 * @param err - O objeto de erro capturado.
 * @param _request O objeto `Request` que contém as informações da requisição.
 * @param response O objeto `Response` que será enviado como resposta à requisição.
 * @param nextFunction A próxima função middleware a ser executada.
 * @returns {void}
 * @throws {Error} Lança erro se o objeto err não for uma instância de `ApiError`, `AppError`, `ZodError` ou não possuir as propriedades `codePrefix` e `errorInfo`.
 */
export declare function internalErrors(err: Error | any, _request: Request, response: Response, nextFunction: NextFunction): void;
