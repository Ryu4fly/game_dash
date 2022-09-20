import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.listen(port, () => {
  console.log(`Listening to port: ${port} ...`)
});
