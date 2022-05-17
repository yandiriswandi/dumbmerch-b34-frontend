import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function EditCategory({showEdit, handleCloseEdit}) {
  return (
    <div>
         <Modal show={showEdit} onHide={handleCloseEdit} centered>
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
    </div>
  )
}
