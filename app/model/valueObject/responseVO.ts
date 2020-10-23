export class ResponseBodyVO {
  code: number;

  message: string;

  data?: Record<string, unknown>;
}

export type ResponseVO = {
  statusCode: number,
  body: string,
};
