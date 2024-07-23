import { HttpExceptions } from './http-exceptions';
import { Logger } from '../Logger';
import Koa from 'koa';
import { isString } from '../util';
export type IExceptionsFilter = (ctx: Koa.DefaultContext, error: Error | HttpExceptions) => void | any | Promise<any>;

interface IExceptionsResponseBody {
  message: string;
  code: number;
  success: boolean;
  data?: null;
  url?: string;
  requestId?: string | number | undefined;
  timestamp?: Date | undefined | number;
}

export const HttpExceptionFilter: IExceptionsFilter = async (
  ctx: Koa.DefaultContext,
  error: Error | HttpExceptions,
) => {
  Logger.error(`${error.stack}`);
  const body: IExceptionsResponseBody = {
    success: false,
    code: 500,
    data: null,
    message: 'Internal Server Error',
    timestamp: new Date(),
    url: ctx.url,
    requestId: ctx.requestId,
  };

  if (error instanceof HttpExceptions) {
    body.code = error.getStatus();
  }
  if (isString(error.message)) {
    body.message = error.message;
  }
  ctx.body = await body;
};
