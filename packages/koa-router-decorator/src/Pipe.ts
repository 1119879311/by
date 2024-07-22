import { IContextArg, IContextOption } from './Interface';
import { getContextOption } from './Util';

export abstract class Pipe {
  abstract apply(data: IContextArg | Array<IContextArg>, option?: IContextOption): Promise<any> | any;
}

export function pipTranfromMiddleWare(
  instance: Object,
  methodName: string,
  ...middlewares: Array<Pipe>
): Array<Function> {
  return middlewares.map((itme: Pipe) => {
    return async (ctx: any, next: Function) => {
      let option = getContextOption(ctx, next, instance, methodName);
      await itme.apply(option.getArgs(), option);
      await next();
    };
  });
}
