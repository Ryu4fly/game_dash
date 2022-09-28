import dotenv from 'dotenv';
import express from 'express';

import connectDB from './db/connectdb';

dotenv.config();

const port = process.env.PORT;
const mongoDbUrl = process.env.MONGODB_URL as string;
const app = express();

(async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to port: ${port} ...`);
    });
    await connectDB(mongoDbUrl);
  } catch (error) {
    console.log(error);
  }
})();
