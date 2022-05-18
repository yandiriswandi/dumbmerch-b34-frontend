import React from 'react'
import {Card} from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Customer from '../assets/customer.jpg'

function Complain() {

  const title = "Complain";
  document.title = "DumbMerch | "+title;
  return (
    <div>
        <Navbar title={title}/>
        <div className='complain'>
          <div className='border-end complain-left ps-4 d-flex mt-4 '>
            <img src={Customer} alt="">
            </img>
            <div className='h5 ms-4 mt-2 text-light'> 
              Admin
              <p className='text-sm-start text-light fw-normal fs-6 mt-2'>Yes is there anithyng i can help </p>
            </div>
          </div>
          <div className='complain-right d-flex flex-column justify-content-end pb-5  ps-5'>
            <div className='chat pe-5'>
                <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>hallo, apa ada yang bisa dibantu</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>apakah produk hdmi masih ada ?</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>masih ada silahkan di order </Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>oke siap kak nanti saya order</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>ditunggu ya kak </Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>bagaimana cara bayarnya ?</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>klik produk dan langsung checkout ya kak</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>berapa hari biasanya kak ?</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>3 hari dari pemesanan ya kak</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>jika ada barang yang rusak gimana kak ?</Card>
                  </div>
                  <div className='d-flex justify-content-end'>
                    <Card className='messages ms-3 mb-4 rounded-3 bg-dark text-light' body>bisa dikembalikan kak maksimal satu hari sesudah barang datang</Card>
                    <div class="triangle-right"></div>
                  </div>
                  <div className='chat-complain d-flex ms-3'>
                    <img className='' src={Customer} alt="">
                    </img>
                    <div class="triangle-left ms-3 "></div>
                    <Card className='messages mb-2 mt-1 rounded-3 bg-dark text-light' body>oke terimakasih kak </Card>
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