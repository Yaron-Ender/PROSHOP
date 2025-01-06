// import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap'
import { useGetProductsQuery } from "../slices/productSlice.js";
import Product from '../component/Product'
import Loader from '../component/loader.jsx';
import Message from '../component/Message.jsx';
import Paginate from "../component/Paginate.jsx";
import ProductCarousel from '../component/ProductCarousel.jsx';
import Meta from '../component/Meta.jsx';

const HomeScreen = () => {

  const { pageNumber,keyword } = useParams();

 const { data, isLoading, error } = useGetProductsQuery({keyword,pageNumber});
  return (
      <>
    <Meta/>
      {keyword?<Link to='/' className='btn btn-light mb-4'>Go Back</Link>:
      <ProductCarousel/>
      }
    {isLoading ? (
    <Loader />
    ) : error ? (
      <Message variant='danger'>{error?.data.message || error.error} - somthing go wrong with the database</Message>
    ) : (
      <>
        <h1>Latest Products</h1>
        <Row>
          {data.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={data.pages} page={data.page}  keyword={keyword ? keyword : ''}/>
      </>
    )}
    </>
    
  )
}

export default HomeScreen