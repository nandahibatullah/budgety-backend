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
```
yarn install
```

Then you can invoke individual locally with:
```
sls invoke local -f hello
```
`hello` being the function name.
