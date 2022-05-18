import React from 'react'
import { Container,Navbar,Nav, Row, Col,Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import logo from './Frame.png';
import ProductData from '../dummyData/product';
import rupiahFormat from 'rupiah-format';

function Home () {
    console.log(ProductData)
  return (
    <div>
    <Navbar className='navbar fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home">
        <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/complain">Complain</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/profile">Profile</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
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