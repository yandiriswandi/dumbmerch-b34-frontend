import { Container,Navbar,Nav, Table,Pagination,Modal,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ProductData  from '../dummyData/product'
import logo from '../assets/Frame.png';
import React, { useState } from 'react';
import rupiahFormat from "rupiah-format";
import DeleteData from '../components/modal/DeleteData';
import AddProduct from '../components/modal/AddProduct'
import EditProduct from '../components/modal/EditProduct';
import NavbarAdmin from "../components/NavbarAdmin";

function Product() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    //modal Add
    const [showAdd, setShowAdd] = useState(false);
    const handleCloseAdd = () => setShowAdd (false);
    const handleShowAdd = () => setShowAdd (true);
    //modal for delete
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal edit
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit (false);
    const handleShowEdit = () => setShowEdit (true);
    //ternary operator untuk navbar
    const title = "Product";
    document.title = "DumbMerch | " + title;

  return (
     
    <div>
       <NavbarAdmin title={title} />
        <div className='product mt-5'>
            <div className='h3 text-light fw-bold mb-4'>List Product</div>
            <div className='add'>
            <button  type="button"  className="btn-delete btn-success ms-2 fw-bold" onClick={handleShowAdd}>Add Product</button>
            </div>
            <Table className='table-product  mt-3' striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th width="1%" className="text-center">No</th>
                    <th className='col-md-6'>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className='text-center'>Action</th>
                    </tr>
                </thead>
                {ProductData.map((product, index)=>(
                <tbody key={product.id}>
                    <tr>
                    <td className="align-middle text-center">{index + 1}</td>
                    <td >
                      <img
                        src={product.image}
                        style={{
                          width: "100%",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td className="align-middle">{product.name}</td>
                    <td className="align-middle">{product.desc}</td>
                    <td className="align-middle  text-center">{rupiahFormat.convert(product.price)}</td>
                    <td className="align-middle  text-center">{product.qty}</td>
                    <td className='product-button text-center align-middle'>
                        <button type="button" className='btn-edit btn-success fw-bold' onClick={handleShowEdit}>Edit</button>
                        <button type="button" className='btn-edit btn-danger fw-bold' onClick={handleShow}>Delete</button>
                    </td>
                    </tr>
                </tbody>
                    ))}
            </Table>
        </div>
        <div className='page d-flex  justify-content-center'>
            <Pagination className='pagination'>{items}</Pagination>
            <br />
        </div>
        <DeleteData  
          show={show}
          handleClose={handleClose}
        />
        <EditProduct  
          showEdit={showEdit}
          handleCloseEdit={handleCloseEdit}
        />
        <AddProduct 
          showAdd={showAdd}
          handleCloseAdd={handleCloseAdd}
        />
    </div>
  )
}
export default Product;
