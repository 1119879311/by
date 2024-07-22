import type Koa from 'koa';
export type IMethondType = 'get' | 'post' | 'delete' | 'put' | 'all';
export type IRouterType = {
  path: string; // "/"
  methond: string | IMethondType; //"GET"
  // midwares: Function[],
};
//一个方法对应一个路由信息
export type IKeyMapRouters = {
  [methondName: string]: IRouterType;
};

export type IControllerMetate = {
  prefix: string | undefined;
  routers: IKeyMapRouters;
  // midwares: Function[],
};

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export type IFactroyParameterOption = {
  ctx: Koa.DefaultContext;
  next: Function;
  paramType: string | Function;
  instance: object;
  methodName: string;
  [key: string]: any;
};
export type IContextArg = { value: any[] | any; type: any[] | any };

export type IContextOption = {
  get: <T>(metaKey: string | symbol, isClass?: boolean) => T | undefined;
  getArgs: (index?: number) => IContextArg | Array<IContextArg>;
  ctx: any;
  next?: Function;
};
