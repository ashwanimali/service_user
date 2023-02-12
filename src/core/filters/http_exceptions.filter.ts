/* eslint-disable max-classes-per-file */
import { ExceptionFilter, HttpException, ArgumentsHost, Catch, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();


        response.status(status).json({
            statusCode: status,
            date: new Date().toISOString(),
            path: request.url,
            type: "http"
        })
    }
}

// caught every exception

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR

        response.sendStatus(status).json({
            statusCode: status,
            date: new Date().toISOString(),
            path: request.url,
            type: "all"
        })
    }
}