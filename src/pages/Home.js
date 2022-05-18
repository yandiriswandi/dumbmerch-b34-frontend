import React from 'react'
import { Container, Row, Col,Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ProductData from '../dummyData/product';
import rupiahFormat from 'rupiah-format';
import Navbar from '../components/Navbar';

function Home () {
    console.log(ProductData)
  return (
    <div>
    <Navbar/>
    <Container className='home-product pb-5'>
        <div className='h3 mt-5 text-danger'>Product</div>
        <Row className='row row-cols-4 mt-4'>
            {ProductData.map((product)=>(
            <Col className='  mt-4' key={product.id}>
            <Card className='card-product bg-dark'  style={{ width: '18rem' }}>
                <Card.Img className='image-product' variant="top" src={product.image} />
                <Card.Body>
                   <Card.Title><Link className='text-danger text-decoration-none' to={`/detail-product/` + product.id}>{product.name}</Link></Card.Title>     
                    <Card.Text className='text-light'>  
                        {rupiahFormat.convert(product.price)}<br></br>
                        stock : {product.qty}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
    </div>
  );
}
export default Home;