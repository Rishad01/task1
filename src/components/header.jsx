import React from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../style.css'
function Header()
{
    return(
        <Container fluid className="headerBack m-0">
            <Row className="m-3 d-md-none">
                <Col xs={6} className="d-flex justify-content-start mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill="white" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                </Col>
                <Col xs={6} className="d-flex justify-content-end mt-2">
                <Button variant="outline-light">Join Group</Button>
                </Col>
            </Row>
            <Row className="m-3 align-items-end"> 
                <Col xs={12} className="">
                <h5>Computer Engineering</h5>
                </Col>
                <Col xs={12}>
                <p>142,765 Computer Engineers follow this</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Header;