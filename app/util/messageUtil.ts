import { ResponseVO } from '../model/valueObject/responseVO';
import Result from '../model/result';

enum StatusCode {
  success = 200,
}

export class MessageUtil {
  static success(data: Record<string, unknown>, message = 'success'): ResponseVO {
    const result = new Result(StatusCode.success, 0, message, data);

    return result.bodyToString();
  }

  static error(code = 1000, message: string): ResponseVO {
    const result = new Result(StatusCode.success, code, message);
    return result.bodyToString();
  }
}
