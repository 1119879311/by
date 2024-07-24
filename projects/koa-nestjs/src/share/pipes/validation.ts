import { IContextArg, IContextOption, IGuard, Pipe } from '@bylive/router';
import { HttpExceptions, HttpStatus } from '@bylive/nestjs';
// 管道：参数的转换，设置默认值，校验
export class ValidationPip extends Pipe {
  apply(value: IContextArg, option: IContextOption): void | Promise<void> {
    console.log('管道 Validation-apply:');
    // throw new Error('管道 Validation-apply: 参数有误');
    throw new HttpExceptions('管道错误', HttpStatus.BAD_GATEWAY);
    // option.ctx.throw(500, '管道错误');
    // const err: any = new Error('name required');
    // err.status = 400;
    // err.expose = true;
    // throw err;
  }
}
