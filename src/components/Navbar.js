import React, {useContext} from 'react'
import { Container, Navbar as NavbarComp, Nav, NavDropdown } from 'react-bootstrap'
import {
    Link,
    useNavigate
} from "react-router-dom"

import { UserContext } from '../context/userContext'

import ImgDumbMerch from '../assets/DumbMerch.png'

export default function Navbar(props) {

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
                <NavbarComp.Brand as={Link} to="/home">
                    <img src={ImgDumbMerch} className="img-fluid" style={{ width: '60px', height: '60px' }} alt="brand"/>
                </NavbarComp.Brand>
                <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
                <NavbarComp.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/complain" className={props?.title == 'Complain' ? `text-navbar-active` : `text-navbar`}>Complain</Nav.Link>
                        <Nav.Link as={Link} to="/profile" className={props?.title == 'Profile' ? `text-navbar-active` : `text-navbar`}>Profile</Nav.Link>
                        <Nav.Link onClick={handleLogout} className="text-navbar">Logout</Nav.Link>
                    </Nav>
                </NavbarComp.Collapse>
            </Container>
        </NavbarComp>
    )
}
