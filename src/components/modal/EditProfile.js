import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function EditProfile({show, handleClose}) {
  return (
    <div>
       <Modal show={show} onHide={handleClose}>
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
                <label for="productName" class="form-label">Name</label>
                <input type="text" class="form-control" id="Name"></input>
                </div>
                <div class="mb-3">
                <label for="productDesc" class="form-label">Email</label>
                <input type="email" class="form-control" id="Email"></input>
                </div>
                <div class="mb-3">
                <label for="price" class="form-label">Phone</label>
                <input type="text" class="form-control" id="Phone"></input>
                </div>
                <div class="mb-3">
                </div>
                <label for="Qty" class="form-label">Gender</label>
                <select class="form-select" aria-label="Default select example">
                <option selected>Open this select for gender</option>
                <option value="1">Laki-laki</option>
                <option value="2">Perempuan</option>
                <label for="Qty" class="form-label">Address</label>
                <input type="text" class="form-control" id="Address"></input>
                </select>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                Edit
                </Button>
                <Button variant="danger" onClick={handleClose}>
                Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}
