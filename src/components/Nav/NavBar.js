import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Form, FormControl, Button } from 'react-bootstrap';
import '../Nav/navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" className='navbar' >
        <Navbar.Brand href="/E-Commerce-React" className='text-light ms-4'>Trending Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggel'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/E-Commerce-React" className='text-light ms-3'>Home</Nav.Link>
            <Nav.Link className='text-light ms-3'><Link to='/signup'className='link' >Signup</Link></Nav.Link>
            <Nav.Link className='text-light ms-3'><Link to='/LogIn' className='link' >SignIn</Link></Nav.Link>
            <Nav.Link className='text-light ms-3'><Link to='/categories' className='link' >Categories</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success" className='text-light me-3'>Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
