// const express = require('express')
import path from 'path';
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
// import products from './data/products.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';  
import productRoutes from "./routes/productsRoutes.js";
import userRouters from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config()
connectDB()//connect to DB

const port = process.env.PORT || 8000

const app = express();
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cookie parser middleware
app.use(cookieParser())

app.use("/api/products", productRoutes);
app.use("/api/users",userRouters)
app.use("/api/orders",orderRoutes)
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
  );

app.get('/',(req,res)=>{
res.send('API is running')
})
const __dirname = path.resolve();//set__dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')));
//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   );
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....');
//   });
// }

app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>{console.log(`Server is running on port ${port}`)})
