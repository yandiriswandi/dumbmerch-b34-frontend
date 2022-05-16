import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import {Link } from 'react-router-dom';
//import data from localstorage
import logo from './Frame.png';
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
        <div className='card-detail'>
            <div className='detail-left'>
            <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt=""></img>
            </div>
            <div className='detail-right'>
                <div className='h2 text-danger fw-bold'>Mouse</div>
                <p>Stock : 600</p>
                <p>  - Wireless Mouse<br></br>
                     - Konektivitas Wireless 2.4 GHz<br></br>
                     - Jarak Hingga 10 M<br></br>
                     - Plug and Play<br></br></p>
                <p>React Native Framework membantu pengembang dalam membuat aplikasi seluler yang nyata dan menarik hanya dengan bantuan JavaScript, serta dapat didukung untuk platform Android dan iOS. Hanya satu kali kode, maka aplikasi REACT Native tersedia untuk platform iOS dan Android yang membantu menghemat waktu pengembangan. Didukung oleh Facebook, REACT Native memiliki dukungan komunitas yang sangat besar saat ini. React Native dibangun di atas ReactJS yang telah memberikan kompetisi besar ke favorit lama, AngularJS. Meskipun ada beberapa persamaan dan perbedaan antara ReactJS dan React Native.</p>
                <div className='harga h4 text-danger'>Rp.300.900</div>
                <button type="button" className="btn btn-danger mt-4">Buy</button>
            </div>
        </div>
   </div>
</div>
    );
}

export default DetailProduct;