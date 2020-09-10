import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import MyRouter from './MyRouter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from '../logo.png';

function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Link to="/">
        <img
          src={Logo}
          height="100vh"
          className="d-inline-block align-top m-2"
          alt="logo"
        />
      </Link>
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
