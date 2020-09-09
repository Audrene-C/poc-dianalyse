import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function MyRouter() {
  return (
        <Nav className="mr-auto">
          <Link className="nav-link" to="/start">Getting started</Link>
          <Link className="nav-link" to="/public">Public</Link>
          <Link className="nav-link" to="/private">Private</Link>
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/register">Register</Link>
        </Nav>
  );
}