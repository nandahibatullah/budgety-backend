import { hello } from '../app/handler';

describe('hello', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return a successful message', async () => {
    const exptectedMesssage = 'Go Serverless v1.0! Your function executed successfully!';
    const actualResponse = await hello();
    expect(JSON.parse(actualResponse.body).message).toEqual(exptectedMesssage);
    expect(actualResponse.statusCode).toEqual(200);
  });
});
