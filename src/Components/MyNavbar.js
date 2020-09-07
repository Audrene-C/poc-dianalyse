import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import MyRouter from './MyRouter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from '../logo.png';

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          height="50vh"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Brand>Di-Analyse Signal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <MyRouter />
        <Form inline>
          <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
          <Button variant="outline-danger">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
