import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`> Server is running in http://localhost:${PORT}`);
});
