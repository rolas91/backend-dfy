import { Catch, ExceptionFilter, HttpException, ArgumentsHost, HttpStatus } from "@nestjs/common";

@Catch()
export class HttpExcepcionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost){
        //Definiendo el contexto de la excepcion
        const ctx= host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exception.getStatus ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.method,
            message: status !== HttpStatus.INTERNAL_SERVER_ERROR ? 
            exception.message.error || exception.message || null : 'Internal Server Error'
        };
        return response.status(status).json(errorResponse);
    }
}