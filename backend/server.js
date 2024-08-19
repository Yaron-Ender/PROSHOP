// const express = require('express')
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import products from './data/products.js';
import productRoutes from "./routes/productsRoutes.js";
dotenv.config()
connectDB()//connect to DB

const port = process.env.PORT || 8000

const app = express();

app.use("/api/products", productRoutes);

app.get('/',(req,res)=>{
res.send('API is running')
})
app.listen(port,()=>{console.log(`Server is running on port ${port}`)})
