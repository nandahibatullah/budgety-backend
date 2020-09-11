import { HelloResponse } from './types/helloResponse';

export const hello = async (): Promise<HelloResponse> => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Go Serverless v1.0! Your function executed successfully!',
  }),
});
