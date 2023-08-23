import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = ({ user, onLoggedOut }) => {
    return (
        <Navbar className="navbar" bg="warning" expand="md">
            <Container >
                <Navbar.Brand as={Link} href="/">
                    Movies-Couch
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basci-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-var">
                    <Nav className="me-auto">
                        {!user && (
                            <>
                                <LinkContainer to="/login">
                                    <Nav.Link as={Link} href="/login">
                                        Login{" "}
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/signup">
                                    <Nav.Link as={Link} href="/signup">
                                        Signup{" "}
                                    </Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                        {user && (
                            <>
                                <LinkContainer to="/">
                                    <Nav.Link as={Link} href="/">
                                        Home
                                    </Nav.Link>
                                </LinkContainer>
                                    <LinkContainer to="/profile">
                                    <Nav.Link as={Link} href="/profile">
                                        Profile
                                    </Nav.Link>
                                </LinkContainer>
                                <Nav.Link onClick={onLoggedOut} >
                                    Logout
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}; 