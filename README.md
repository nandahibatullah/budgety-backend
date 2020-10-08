# budgety-backend

Serverless Node.js backend app for Budgety built using the Serverless framework,
AWS Lambda Functions, written in Typscript.

## Requirements

- [Node.js 12.x](https://nodejs.org/en/download/)
- [Yarn](https://github.com/yarnpkg/yarn)
- [Serverless Framework CLI](https://www.serverless.com/framework/docs/getting-started/)

### Recommended for contribution

- EditorConfig for your editor of choice.
- ESLint plugin for your editor of choice.

## Running the service locally

Start off with building the dependencies with:

``` bash
yarn install
```

Then you can invoke individual locally with:

```bash
sls invoke local -f hello
```

`hello` being the function name.

You could also emulate the service running on AWS + API Gateway locally with
Serverless Offline.

To use it just run:

``` bash
sls offline
```

and then make requests to the endpoints that the terminal displays.
e.g.

``` bash
   ┌─────────────────────────────────────────────────────────────────────────┐
   │                                                                         │
   │   GET | http://localhost:3000/dev/hello                                 │
   │   POST | http://localhost:3000/2015-03-31/functions/hello/invocations   │
   │                                                                         │
   └─────────────────────────────────────────────────────────────────────────┘
```
