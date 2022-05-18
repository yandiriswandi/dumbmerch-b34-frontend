import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';
//import data from localstorage
import logo from './Frame.png';
import Product from './Product';
import ProductData from '../dummyData/product';
import rupiahFormat from 'rupiah-format'
// import ProductData from '../dummyData/product';


function DetailProduct() {
return (
<div>
        <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Complain</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/profile">Profile</Link></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
   <div>
   {ProductData.map((product)=>(
        <div className='card-detail'>
            <div className='detail-left'>
            <img src={product.image} alt=""></img>
            </div>
            <div className='detail-right'>
                <div className='h2 text-danger fw-bold'>{product.name}</div>
                <p>Stock : {product.qty}</p>
                <p>  - Wireless Mouse<br></br>
                     - Konektivitas Wireless 2.4 GHz<br></br>
                     - Jarak Hingga 10 M<br></br>
                     - Plug and Play<br></br></p>
                <p>{product.desc}</p>
                <div className='harga h4 text-danger'>{rupiahFormat.convert(product.price)}</div>
                <button type="button" className="btn btn-danger mt-4">Buy</button>
            </div>
        </div>
       ))}
   </div>
</div>
    );
}

export default DetailProduct;