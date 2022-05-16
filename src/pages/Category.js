// import React from 'react'
import { Container,Navbar,Nav, Table,Pagination,Modal,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import CategoryData from '../dummyData/category'
//import data from localstorage
import logo from './Frame.png';
// import useState for modal
import React, { useState } from 'react';

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
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/complain-admin">Complain</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-danger fw-bold ' to="/category">Category</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold' to="/product">Product</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='category mt-5'>
            <div className='h3 text-light fw-bold mb-4'>List Category</div>
            <div className='add'>
            <button  type="button" className="btn-delete btn-success ms-2 fw-bold" onClick={handleShowAdd}>Add Product</button>
              <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header >
                  <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                  <div class="mb-3">
                    <label for="category" class="form-label">Category Name</label>
                    <input type="text" class="form-control" id="category"></input>
                  </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={handleCloseAdd}>
                    Add Product
                  </Button>
                  <Button variant="danger" onClick={handleCloseAdd}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
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
                    <button type="button" className="btn-edit btn-success fw-bold" onClick={handleShowEdit}>Edit</button>
                          <Modal show={showEdit} onHide={handleCloseEdit}>
                              <Modal.Header >
                                <Modal.Title>Edit Data</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <form>
                                <div class="mb-3">
                                  <label for="Category" class="form-label">Category Name</label>
                                  <input type="text" class="form-control" id="category"></input>
                                </div>
                              </form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="success" onClick={handleCloseEdit}>
                                  Edit
                                </Button>
                                <Button variant="danger" onClick={handleCloseEdit}>
                                  Cancel
                                </Button>
                              </Modal.Footer>
                          </Modal>
                        <button type="button" className="btn-delete btn-danger ms-2 fw-bold" onClick={handleShow}>Delete</button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header >
                            <Modal.Title>Delete Data</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Are you sure you want to delete this data ?</Modal.Body>
                          <Modal.Footer>
                            <Button variant="success" onClick={handleClose}>
                              Yes
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                              No
                            </Button>
                          </Modal.Footer>
                        </Modal>
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
  </div>
  )
}
export default Category;
