import React from 'react'
import { Container,Navbar,Nav, Card} from 'react-bootstrap';
import {Link } from 'react-router-dom';
//import data from localstorage
import logo from './Frame.png';

function Complain() {
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
                <Nav.Link ><Link className='text-decoration-none text-danger fw-bold ' to="/">Complain</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/profile">Profile</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='complain'>
          <div className='border-end complain-left ps-4 d-flex mt-4 '>
            <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
            </img>
            <div className='h5 ms-4 mt-2 text-light'> 
              Admin
              <p className='text-sm-start text-light fw-normal fs-6 mt-2'>Yes is there anithyng i can help </p>
            </div>
          </div>
          <div className='complain-right d-flex flex-column justify-content-end pb-5  ps-5'>
            <div className='chat pe-5'>
                <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
                  </div>
            </div>
            <div className='complain-input pe-5'>
               <input type="text" className="form-control mt-4" placeholder="Send Message"></input>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Complain;