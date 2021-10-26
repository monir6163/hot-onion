import React, { useState } from 'react';
import './Header.css';
import logo from '../../../Images/Logo/logo2.png';
import { Container, Nav, Navbar, NavDropdown, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [changeHeader, setChangeHeader] = useState(false)
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (

        <>
            <Navbar className={changeHeader ? "bg-white" : 'bg-nav'} expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to="/">
                            <img width="150" src={logo} alt="Red Onion" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home" ><Button variant="danger">
                                Home
                            </Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/cart"><Button variant="danger">
                                {cart}<Badge bg="danger">10</Badge>
                            </Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/login"><Button variant="danger">
                                Login
                            </Button></Nav.Link>
                            <Nav.Link as={NavLink} to="/resgister"><Button variant="danger">
                                Register
                            </Button></Nav.Link>
                            <NavDropdown title={
                                <img width="45px" src={logo} alt="Red Onion" />
                            } >
                                <NavDropdown.Item>Md Monir Hossain</NavDropdown.Item>
                                <NavDropdown.Item>
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" size="lg">
                                            LogOut
                                        </Button>
                                    </div>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;