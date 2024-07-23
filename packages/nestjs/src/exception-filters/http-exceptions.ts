import { isObject, isString } from '../util';
import { HttpStatus } from './http-status';
// type It = Record<string,any>

interface IHttpExceptionOption {
  message: string;
  statusCode: number | HttpStatus;
}
export class HttpExceptions extends Error {
  constructor(private readonly response: string | IHttpExceptionOption, private statusCode: number | HttpStatus) {
    super();
    this.init();
  }
  /**
   * name
   */

  public init() {
    if (isObject(this.response)) {
      this.message = this.response.message;
      this.statusCode = this.response.statusCode;
    } else {
      this.message = isString(this.response) ? this.response : 'Internal Server Error';
    }
    if (this.statusCode == undefined) {
      this.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    }
  }
  /**
   * name
   */
  public getResponse() {
    this.response;
  }
  /**
   * name
   */
  public getStatus() {
    return this.statusCode;
  }
}
