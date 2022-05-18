import { Container,Navbar,Nav, Table,Pagination,Modal,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import CategoryData from '../dummyData/category'
import React, { useState } from 'react';
import DeleteData from '../components/modal/DeleteData';
import EditCategory from '../components/modal/EditCategory';
import AddCategory from '../components/modal/AddCategory';
import NavbarAdmin from "../components/NavbarAdmin";

function Category() {
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
    //modal edit
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit (false);
    const handleShowEdit = () => setShowEdit (true);
    // modal for delete
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //ternary operator untuk navbar
    const title = "Category";
    document.title = "DumbMerch | " + title;

  return (
     
    <div>
        <NavbarAdmin title={title} />
        <div className='category mt-5'>
            <div className='h3 text-light fw-bold mb-4'>List Category</div>
            <div className='add'>
            <button  type="button" className="btn-delete btn-success ms-2 fw-bold" onClick={handleShowAdd}>Add Product</button>
            <Table className='mt-3' striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No</th>
                    <th className='text-center'>Category Name</th>
                    <th className='text-center'>Action</th>
                    </tr>
                </thead>
                {CategoryData.map((category)=>(
                <tbody>
                    <tr>
                    <td>{category.id}</td>
                    <td>{category.category_product}</td>
                    <td className='category-button text-center'>
                        <button 
                            type="button" 
                            className="btn-edit btn-success fw-bold" 
                            onClick={handleShowEdit}
                        >
                            Edit
                        </button>
                        <button type="button" className="btn-delete btn-danger ms-2 fw-bold" onClick={handleShow}>Delete</button>
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
    </div>
      <DeleteData  
        show={show}
        handleClose={handleClose}
      />
    <EditCategory  
      showEdit={showEdit}
      handleCloseEdit={handleCloseEdit}
    />
    <AddCategory  
      showAdd={showAdd}
      handleCloseAdd={handleCloseAdd}
    />
  </div>
  )
}
export default Category;
