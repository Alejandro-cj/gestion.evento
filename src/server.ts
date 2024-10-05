import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_URL as string)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
