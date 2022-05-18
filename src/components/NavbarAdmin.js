import React, {useContext} from 'react'
import { 
    Container, 
    Navbar as NavbarComp, 
    Nav, 
} from 'react-bootstrap'
import {
    Link,
    useNavigate
} from "react-router-dom"
import { UserContext } from '../context/userContext'
import ImgDumbMerch from '../assets/DumbMerch.png'

export default function NavbarAdmin(props) {
  
  const navigate = useNavigate()
  //logout pada usecontext
  const [_, dispatch] = useContext(UserContext)

  const handleLogout = () => {
      dispatch({
          type: 'LOGOUT'
      })
      navigate("/")
  }

    return (
        <NavbarComp expand="lg" className='navbar fixed-top'>
            <Container>
                <NavbarComp.Brand as={Link} to="/complain-admin">
                    <img src={ImgDumbMerch} className="img-fluid" style={{ width: '60px', height: '60px' }} alt="brand"/>
                </NavbarComp.Brand>
                <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
                <NavbarComp.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/complain-admin" className={props?.title == 'Complain admin' ? `text-navbar-active` : `text-navbar`}>Complain</Nav.Link>
                        <Nav.Link as={Link} to="/category" className={props?.title == 'Category' ? `text-navbar-active` : `text-navbar`}>Category</Nav.Link>
                        <Nav.Link as={Link} to="/product" className={props?.title == 'Product' ? `text-navbar-active` : `text-navbar`}>Product</Nav.Link>
                        <Nav.Link onClick={handleLogout} className="text-navbar">Logout</Nav.Link>
                    </Nav>
                </NavbarComp.Collapse>
            </Container>
        </NavbarComp>
    )
}