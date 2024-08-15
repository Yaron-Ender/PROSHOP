
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import products from './data/products.js';
// import Product from './config/models/productModel.js';
dotenv.config()
connectDB()//connect to DB

const port = process.env.PORT || 8000

const app = express();

app.get('/',(req,res)=>{
res.send('API is running')
})
 app.get('/api/products',(req,res)=>{

 res.json({
    products
 })
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find(prod=>prod._id==req.params.id)
 res.json({
    product
 })
})

app.listen(port,()=>{console.log(`Server is running on port ${port}`)})
