import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function MyFooter() {
  return (
    <div className="my-footer">  
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Footer</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  );
}

export default MyFooter;
