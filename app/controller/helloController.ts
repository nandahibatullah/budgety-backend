import { ResponseVO } from '../model/valueObject/responseVO';
import { MessageUtil } from '../util/messageUtil';

export class HelloController {
  private messsage: string;

  constructor(message: string) {
    this.messsage = message;
  }

  async hello(): Promise<ResponseVO> {
    try {
      return MessageUtil.success({}, this.messsage);
    } catch (err) {
      return MessageUtil.error(err.code, err.message);
    }
  }
}
