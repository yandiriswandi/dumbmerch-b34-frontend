import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function AddCategory({showAdd, handleCloseAdd}) {
  return (
    <div>
        <Modal show={showAdd} onHide={handleCloseAdd} centered>
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
    </div>
  )
}
