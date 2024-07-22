import 'reflect-metadata';
import { PARAMS_META_KEY } from './Constant';
import { getContext, getContextOption } from './Util';
import { Pipe } from './Pipe';
import { IFactroyParameterOption } from './Interface';

// 方法参数
export function factroyParameter(fn: Function) {
  return function (target: any, methodName: string, paramsIndex: number) {
    let meta: Array<Function> = Reflect.getMetadata(PARAMS_META_KEY, target, methodName) || [];
    // meta.push({ methodName, fn, paramsIndex });
    meta.unshift(fn);
    Reflect.defineMetadata(PARAMS_META_KEY, meta, target, methodName);
  };
}

const getPrarmter = <T>(
  values: any,
  paramType: string | Function,
  filed?: T | Pipe,
  pipe?: Pipe,
  contextOption?: any,
) => {
  let pipeRes: undefined | Pipe = pipe;
  let fieldRes: undefined | T;
  if (filed instanceof Pipe) {
    pipeRes = filed;
  } else {
    fieldRes = filed;
  }
  let resValue = fieldRes ? values[fieldRes] : values;
  if (pipeRes instanceof Pipe) {
    // 进行管道处理,获取上下文
    const { ctx, next, instance, methodName } = getContextOption as unknown as IFactroyParameterOption;
    let option = getContextOption(ctx, next, instance, methodName);
    let newValue = pipeRes.apply({ value: resValue, type: paramType }, option);
    if (newValue !== undefined) {
      resValue = newValue;
    }
  }
  return resValue;
};
export const Ctx = () => factroyParameter(({ ctx }: IFactroyParameterOption) => ctx);
export const Req = () => factroyParameter(({ ctx }: IFactroyParameterOption) => ctx.request);
export const Res = () => factroyParameter(({ ctx }: IFactroyParameterOption) => ctx.response);

export const ValueTypePip = (type: string) => {
  return <T>(filed?: string | Pipe, pipe?: Pipe) =>
    factroyParameter((optons: IFactroyParameterOption): T => {
      const { paramType, ctx, ...otherOptions } = optons;
      return getPrarmter(ctx.request[type] || {}, paramType, filed, pipe, {
        ctx,
        ...otherOptions,
      });
    });
};

export const Query = ValueTypePip('query');
export const Param = ValueTypePip('param');

export const Body = ValueTypePip('body');
export const Header = ValueTypePip('headers');

export const Next = () => factroyParameter((option: IFactroyParameterOption) => option.next);

export const Cookie = () => factroyParameter(({ ctx }: IFactroyParameterOption) => ctx.cookies);

export const Session = () => factroyParameter(({ ctx }: IFactroyParameterOption) => ctx.session);

// 获取当前类型方法的 元数据
export const GetContext = (metaKey?: string | symbol, isClass?: boolean) =>
  factroyParameter(({ instance, methodName }: IFactroyParameterOption) =>
    getContext(instance, methodName, metaKey, isClass),
  );
