import { ResponseVO } from './valueObject/responseVO';

export default class Result {
  private statusCode: number;

  private code: number;

  private message: string;

  private data?: Record<string, unknown>;

  constructor(statusCode: number, code: number, message: string, data?: Record<string, unknown>) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  /**
   * Serverless: According to the API Gateway specs, the body content must be stringified
   */
  bodyToString(): ResponseVO {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        data: this.data,
      }),
    };
  }
}
