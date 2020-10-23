import { hello } from '../app/handler';

describe('hello', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should return a successful message', async () => {
    const exptectedMesssage = 'Go Serverless v1.0! Your function executed successfully!';
    const response = await hello({}, null, null);
    const actualMessage = JSON.parse(response.body).message;
    expect(response.statusCode).toEqual(200);
    expect(actualMessage).toEqual(exptectedMesssage);
  });
});
