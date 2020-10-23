import { Handler } from 'aws-lambda';
import { HelloController } from './controller/helloController';

const helloController = new HelloController('Go Serverless v1.0! Your function executed successfully!');

export const hello: Handler = async () => helloController.hello();
