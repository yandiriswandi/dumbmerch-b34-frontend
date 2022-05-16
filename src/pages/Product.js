import { Container,Navbar,Nav, Table,Pagination,Modal,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ProductData  from '../dummyData/product'
//import data from localstorage
import logo from './Frame.png';
// import useState for modal
import React, { useState } from 'react';

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
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/category">Category</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-danger fw-bold ' to="/product">Product</Link></Nav.Link>
                <Nav.Link ><Link className='text-decoration-none text-light fw-bold ' to="/">Logout</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='product mt-5'>
            <div className='h3 text-light fw-bold mb-4'>List Product</div>
            <div className='add'>
            <button  type="button"  className="btn-delete btn-success ms-2 fw-bold" onClick={handleShowAdd}>Add Product</button>
              <Modal show={showAdd} onHide={handleCloseAdd}>
                <Modal.Header >
                  <Modal.Title>Add Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                  <div class="mb-3">
                    <label for="photo" class="form-label">Photo</label>
                    <input type="file" class="form-control" id="photo" aria-describedby="emailHelp"></input>
                  </div>
                  <div class="mb-3">
                    <label for="productName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="productName"></input>
                  </div>
                  <div class="mb-3">
                    <label for="productDesc" class="form-label">Product Desc</label>
                    <input type="text" class="form-control" id="productDesc"></input>
                  </div>
                  <div class="mb-3">
                    <label for="price" class="form-label">Price</label>
                    <input type="text" class="form-control" id="price"></input>
                  </div>
                  <div class="mb-3">
                    <label for="Qty" class="form-label">Qty</label>
                    <input type="text" class="form-control" id="Qty"></input>
                  </div>
                  <label for="Qty" class="form-label">Category</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select for Category Product</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
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
            </div>
            <Table className='table-product table-sm mt-3' striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>No</th>
                    <th className='col-md-6'>Photo</th>
                    <th>Product Name</th>
                    <th>Product Desc</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className='text-center'>Action</th>
                    </tr>
                </thead>
                {ProductData.map((product)=>(
                <tbody key={product.id}>
                    <tr>
                    <td>{product.id}</td>
                    <td ><p className='photo'>{product.image}</p></td>
                    <td>{product.produk}</td>
                    <td>{product.produk}</td>
                    <td>{product.harga}</td>
                    <td>{product.stock}</td>
                    <td className='product-button text-center'>
                        <button type="button" className='btn-edit btn-success fw-bold' onClick={handleShowEdit}>Edit</button>
                          <Modal show={showEdit} onHide={handleCloseEdit}>
                              <Modal.Header >
                                <Modal.Title>Edit Data</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <form>
                                <div class="mb-3">
                                  <label for="photo" class="form-label">Photo</label>
                                  <input type="file" class="form-control" id="photo" aria-describedby="emailHelp"></input>
                                </div>
                                <div class="mb-3">
                                  <label for="productName" class="form-label">Product Name</label>
                                  <input type="text" class="form-control" id="productName"></input>
                                </div>
                                <div class="mb-3">
                                  <label for="productDesc" class="form-label">Product Desc</label>
                                  <input type="text" class="form-control" id="productDesc"></input>
                                </div>
                                <div class="mb-3">
                                  <label for="price" class="form-label">Price</label>
                                  <input type="text" class="form-control" id="price"></input>
                                </div>
                                <div class="mb-3">
                                  <label for="Qty" class="form-label">Qty</label>
                                  <input type="text" class="form-control" id="Qty"></input>
                                </div>
                                <label for="Qty" class="form-label">Category</label>
                                <select class="form-select" aria-label="Default select example">
                                  <option selected>Open this select for Category Product</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </select>
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
                        <button type="button" className='btn-edit btn-danger fw-bold' onClick={handleShow}>Delete</button>
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
  )
}
export default Product;
