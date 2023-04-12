import React from "react";
// import PropTypes from "prop-types";
import {Navbar, Container, Nav} from "react-bootstrap";
import Link from "react-router-dom";

export const NavigationBar = ({user, onLoggedOut}) =>{
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} href="/">
                    Movies-Couch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basci-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-var">
                        <Nav className="me-auto">
                            {!user && (
                                <>
                                <Nav.Link as={Link} href="/login">
                                    Login{" "}
                                </Nav.Link>
                                <Nav.Link as={Link} href="/signup">
                                    Signup{" "}
                                </Nav.Link>
                                </>
                            )}
                            {user && (
                                <>
                                    <Nav.Link as={Link} href="/">
                                        Home
                                    </Nav.Link>
                                    <Nav.Link as={Link} href="/profile">
                                        ProfileViewTest{" "}
                                    </Nav.Link>
                                    <Nav.Link onClick={onLoggedOut} >Logout</Nav.Link>
                                
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}; 

// export default NavigationBar;