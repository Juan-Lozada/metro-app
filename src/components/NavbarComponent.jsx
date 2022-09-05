import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
                <Container>
                    <Nav className="text-center">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavbarComponent;

