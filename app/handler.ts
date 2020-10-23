import { ResponseVO } from './model/valueObject/responseVO';

export const hello = async (): Promise<ResponseVO> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Go Serverless v1.0! Your function executed successfully!',
  }),
});
