import express from 'express';

const app = express();
const port = process.env.port || 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (_req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});
