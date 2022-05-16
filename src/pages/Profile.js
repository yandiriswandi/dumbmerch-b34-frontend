import React from 'react'
import { Container,Navbar,Nav, Row, Col,Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
//import data from localstorage
import logo from './Frame.png';
import logo_middle from './middle.png';
import ProductData from '../dummyData/product';

 function Profile() {
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
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Complain</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-danger fw-bold ' to="/profile">Profile</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container className='card-profile mt-5 pb-5'>
        <Row>
            <Col sm={4} className=" pb-5">
            <div className='h3 text-danger fw-bold mb-4'>My Profile</div>
            <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
            </img>
            </Col>
            <Col sm={3} className=" pt-1">
                <div className='name h5 text-danger mt-5'>
                Name
                <p class="text-sm-start text-light fw-normal fs-6">Yosep</p>
                </div>
                <div className='h5 text-danger mt-4'>
                Email
                <p class="text-sm-start text-light fw-normal fs-6">Yosepmanuel@yahoo.com</p>
                </div>
                <div className='h5 text-danger mt-4'>
                Phone
                <p class="text-sm-start text-light fw-normal fs-6">089789987456</p>
                </div>
                <div className='h5 text-danger mt-4'>
                Gender
                <p class="text-sm-start text-light fw-normal fs-6">male</p>
                </div>
                <div className='h5 text-danger mt-4'>
                Address
                <p class="text-sm-start text-light fw-normal fs-6">
                    kampung cisayong, kecamatan indihiang, desa sukamajukaler, Tasikmalaya, Jawa Barat
                </p>
                </div>
            </Col>
            <Col sm={5} className="card-middle  nopadding">
                <div className='h3 text-danger fw-bold mb-4'>My Transaction</div>
                <Card className='card-middle-detail  nopadding'>
                    <Card.Body className='d-flex  nopadding'>
                    <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">   
                    </img>
                    <div className='detail-profile text-danger fw-bold ms-3'>
                         Mouse
                        <p className='text-sm-start text-light'>
                         Saturday, 14 Juli 2021<br></br>
                         <p className='text-muted'>Price : Rp.500.000</p>
                        </p>
                        <p className='text-light mt-5'>Sub Total : 300.900</p>
                    </div>
                    <div className='d-flex justify-items-start'>
                        <img
                            src={logo_middle}
                            className="logo-profile ms-5 ms-5 ms-5"
                        />
                    </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}
export default Profile;
