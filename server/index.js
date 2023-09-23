import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import config from './config.js';
import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import orderRouter from './routes/order.js';
import productRouter from './routes/product.js';
import viewsRouter from './routes/views.js';

const app = express();
//connecting to mongoDB database
mongoose
  .connect(config.MONGODB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
//cors middleware
app.use(
  cors({
    origin: ['http://localhost:3000'],
    methods: ['PUT', 'POST', 'GET', 'DELETE', 'PATCH'],
    credentials: true,
  })
);
//cookies middleware
app.use(cookieParser());
//other
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
//error middleware handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.get('/', (req, res) => {
  res.send('Hello World!');
});
//use routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/products', productRouter);
app.use('/api/views', viewsRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
