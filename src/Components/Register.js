import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

function Register() {

  return (
    <div className="content d-flex">
      <Card 
      bg="dark"
      text="white"
      border="danger"
      className="login-register my-auto mx-auto"
      style={{ textAlign: 'center'}}
      >
        <Card.Body>
            <Card.Title>Register</Card.Title>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agreed terms" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>
            </Form>
        </Card.Body>
        <Card.Footer>
            <Link to="/login" className="light-gray">Already have an account?</Link>
        </Card.Footer> 
      </Card>
    </div>
  );
}

export default Register;
