import { PARAMS_META_KEY, DesignParamtypes, TypeBaseList } from './Constant';
import { IContextArg, IContextOption } from './Interface';
import nodePath from 'path';
// 获取方法的参数
export function getMothodParameter(instance: object, key: string) {
  return Reflect.getMetadata(PARAMS_META_KEY, instance, key) || [];
}

// 获取方法参数类型
export function getMethodParameterType(instance: object, key: string) {
  return Reflect.getMetadata(DesignParamtypes, instance, key) || [];
}

// 获取参数的类型，排除基本类型
export const getArgTypeSinge = (Iparams: any) => {
  return TypeBaseList.isHas(Iparams.name) ? Iparams.name : Iparams;
};

export function getContext<T = any>(
  instance: object,
  methodName?: string,
  metaKey?: string | symbol,
  isClass?: boolean,
): T {
  const fn = (metaKey: string | symbol, isClass?: boolean) =>
    isClass
      ? Reflect.getMetadata(metaKey, instance.constructor)
      : methodName && Reflect.getMetadata(metaKey, instance, methodName);
  return metaKey ? fn(metaKey, isClass) : fn;
}

// 获取控制器上的参数 和 类型
export function getArgs(ctx: Function, next: Function, instance: object, methodName: string): IContextArg {
  const params: any[] = getMothodParameter(instance, methodName); // 获取真实参数
  const Iparams: any[] = getMethodParameterType(instance, methodName);
  const result: IContextArg = { value: [], type: [] };
  params.forEach((item: Function, index: number) => {
    let paramType = getArgTypeSinge(Iparams[index]);
    result.value.push(
      item({
        ctx,
        next,
        paramType,
        instance,
        methodName,
      }),
    );
    result.type.push(paramType);
  });
  return result;
}

export function getContextOption(ctx: any, next: Function, instance: Object, methodName: string): IContextOption {
  return {
    get: getContext(instance, methodName),
    getArgs: () => getArgs(ctx, next, instance, methodName),
    ctx,
    next,
  };
}

/**
 * 并接路由
 * @param path
 * @param prefix
 * @returns
 */
export const combineRouterPath = (path: string | undefined, prefix: string = '') => {
  return nodePath.join('/', prefix || '', path || '').replace(/\\+/g, '/') || '/';
  // if (path instanceof RegExp) {
  //   return combineRegex(path, prefix);
  // } else if (typeof path !== "object") {
  //   return (
  //     nodePath.join("/", prefix || "", path || "").replace(/\\+/g, "/") || "/"
  //   );
  // }
};
