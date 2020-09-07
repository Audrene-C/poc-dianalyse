import React from "react";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function MyRouter() {
  return (
        <Nav className="mr-auto">
          <Link className="nav-link" to="/start">Getting started</Link>
          <Link className="nav-link" to="/stuff">Some stuff</Link>
          <Link className="nav-link" to="/more">More stuff</Link>
          <Link className="nav-link" to="/about">About us</Link>
        </Nav>
  );
}