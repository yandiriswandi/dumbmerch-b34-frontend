import React from 'react'
import { Container,Navbar,Nav, Card} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import NavbarAdmin from "../components/NavbarAdmin";


function Complain_admin() {

  //ternary operator untuk navbar
  const title = "Complain admin";
  document.title = "DumbMerch | " + title;
  
  return (
    <div>
       <NavbarAdmin title={title} />
        <div className='complain '>
          <div className='border-end complain-left ps-4'>
            <div className='d-flex mt-4'>
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
                </img>
                <div className='h5 ms-4 mt-2 text-light'> 
                Sansan
                <p className='text-sm-start text-light fw-normal fs-6 mt-2'>Yes is there anithyng i can help </p>
                </div>
            </div>
            <div className='d-flex mt-4'>
                <img src="https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="">
                </img>
                <div className='h5 ms-4 mt-2 text-light'> 
                Gagan
                <p className='text-sm-start text-light fw-normal fs-6 mt-2'>Yes is there anithyng i can help </p>
                </div>
            </div>
          </div>
          <div className='complain-right d-flex flex-column justify-content-end pb-5 pe-5 ps-5'>
            <div className='d-flex justify-content-end'>
              <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
              <div class="triangle-right"></div>
            </div>
            <div className='chat-complain d-flex ms-3'>
              <img className='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="">
              </img>
              <div class="triangle-left ms-3 "></div>
              <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>This is some text within a card body.</Card>
            </div>
            <div className='complain-input'>
               <input type="text" className="form-control mt-4" placeholder="Send Message"></input>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Complain_admin;