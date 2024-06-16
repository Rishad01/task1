import React from 'react';
import { Navbar, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';
import magGlass from '../assets/magGlass.svg';

function Nav() {
  return (
    <Navbar  expand="" className="d-none d-md-block m-0">
      <Container fluid>
            <div class="container-fluid">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 ">
            <div class="col-md-3 mb-2 mb-md-0">
            <img
                        src={logo}
                        width="162.57"
                        height="24"
                        className="d-inline-block align-top"
                        alt="Company Logo"
                    />
            </div>

            <div class="nav mb-2 justify-content-center mb-md-0">
            <Form className="d-flex justify-content-center position-relative">
              <img
                src={magGlass}
                alt="Search Icon"
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '20px',
                  height: '20px',
                }}
              />
              <FormControl
                style={{width: '100%', borderRadius: '20px', paddingLeft: '40px' }}
                type="search"
                placeholder="search for your favourite groups in ATG"
                className="me-2"
                aria-label="Search"
                rounded-5
              />
            </Form>
            </div>

            <div class="col-md-3 text-end">
                <strong>Create account.It's free
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </strong>
            </div>
            </header>
        </div>
      </Container>
    </Navbar>
  );
}

export default Nav;

