import React from 'react';
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" id="header">
        <Container>
          <Navbar.Brand as={Link} to="/kodecamp-int-task6">
            Classroom
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav defaultActiveKey="" className="mx-auto">
              <Nav.Link as={Link} to="/kodecamp-int-task5">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/news">
                News
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={Link} to="/login">
                    <Button variant="outline-secondary">Log In</Button>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Header
