//EXPRESS SERVER

//Imports
import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoutes.js';

//Run dotenv config to fetch variables from dotenv file in this file
dotenv.config();

//Connect to MongoDB Database using Mongoose
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Connected to', process.env.DB_NAME);
  })
  .catch((err) => {
    console.log(err.message);
  });

//Functions
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
//Error Handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//Define PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Ready at http://localhost:${port}`);
});
