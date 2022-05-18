import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function EditProduct({showEdit, handleCloseEdit}) {
  return (
    <div>
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
    </div>
  )
}
