import { useState,useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../component/Product'
const HomeScreen = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
    const axiosObj = await axios.get('/api/products')
    const {data } = axiosObj;

    setProducts(data);
    }
    fetchProducts()
  },[])

  return (
    <>   
    <div>Latested Products</div>
    <Row>
      {products&& products.map((product)=>{
       return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
         <Product product={product} />
         </Col>;
      })}
    </Row>
    </>
  )
}

export default HomeScreen