import React from 'react'

//import data from localstorage
import logo from '../assets/Frame.png';
import Product from './Product';
import ProductData from '../dummyData/product';
import rupiahFormat from 'rupiah-format'
import Navbar from '../components/Navbar';
// import ProductData from '../dummyData/product';


function DetailProduct() {
return (
<div>
    <Navbar/>
   <div>
   {ProductData.map((product)=>(
        <div className='card-detail mt-5'>
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