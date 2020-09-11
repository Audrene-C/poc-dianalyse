import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-bootstrap';

function MyFooter() {
  return (
    <div className="my-footer">  
        <Navbar bg="dark" variant="dark">

          <Container>
            <p style={{marginBottom: '0'}}>Copyright © 2020 Audrène</p>
          </Container>

          <Container>
            <NavLink>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </NavLink>
            <NavLink>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </NavLink>
          </Container>

        </Navbar>
    </div>
  );
}

export default MyFooter;
