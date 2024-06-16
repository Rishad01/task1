import React from "react";
import { Container,Row,Col,Image,Button, Stack, Card,FormControl,Form} from "react-bootstrap";
import pen from '../assets/pen.svg';
import edu from '../assets/edu.svg';
import meet from '../assets/meet.svg';
import job from '../assets/job.svg';
import threedots from '../assets/threedots.svg'
import '../style.css'
import kamra from "../assets/Rectangle3.1.png";
import sarah from "../assets/Rectangle3.6.png";
import ronal from "../assets/Rectangle3.8.png";
import joseph from "../assets/Rectangle3.10.png";
import pic1 from "../assets/Rectangle5.png";
import pic2 from "../assets/Rectangle5.1.png"
import pic3 from "../assets/Rectangle5.2.png"
import location from "../assets/location.svg";
import msg from '../assets/msg.svg';

function Feed()
{
    return (
        <Container fluid className="px-md-5">
        <Row className="m-3 d-md-none px-md-5">
                <Col xs={6} className="d-flex justify-content-start">
                <h4>Posts(365)</h4>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                
                <Button className="btn btn-light">Filter:All  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                </Button>
                </Col>
            </Row>
            <Row className="d-none d-md-flex align-items-center m-3">
        <Col>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">All posts(32)</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Article</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Job</a>
            </li>
          </ul>
        </Col>
        <Col xs='auto'>
          <Button className="btn btn-light mx-1">Write Post <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          </Button>
          <Button className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
        </svg> Leave Group</Button>
        </Col>
      </Row>
        <Row className="justify-content-center px-md-5">
        <hr></hr>
        <Col xs={12} md={8}>
            
            <Card>
            <Card.Img variant="top" src={pic1} />
             <Card.Body>
            <Row className="m-3 d-flex align-items-center">
            <Col  xs="auto" className="p-0"><Image className="pen" src={pen}></Image></Col> <Col xs="auto" className="p-0"><h6 className="mb-0 ml-2">Article</h6></Col>
            </Row>
            <Row className="m-3">
             <Col xs={10}>
             <strong>What if famous brands had regular fonts? Meet RegulaBrands!</strong> 
             </Col>
             <Col xs={2} className="d-flex justify-content-end">
             <Image className="threedots" src={threedots}></Image>
             </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <p className="truncate-text">Lorem ipsum dolor sit amet. Hic voluptatem excepturi et laborum similique qui molestiae quia aut amet vitae est mollitia excepturi est deserunt nihil ut laborum voluptates. Aut consequatur autem e</p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={6}>
                   <Row className="m-0 p-0 d-flex align-items-center">
                    <Col xs="auto" className="m-0 p-0">
                        <Image rounded src={kamra}></Image>
                    </Col>
                    <Col xs="auto">
                    <Stack gap={0} className="m-0 p-0">
                        <strong className="">Sarthak Kamra</strong><p>1.3k views</p>
                    </Stack>
                    </Col>
                   </Row>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                <Button style={{height:'40px'}} className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg> Share
                </Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={pic2} />
             <Card.Body>
            <Row className="m-3 d-flex align-items-center">
            <Col  xs="auto" className="p-0"><Image className="pen" src={edu}></Image></Col> <Col xs="auto" className="p-0"><h6 className="mb-0 ml-2">Education</h6></Col>
            </Row>
            <Row className="m-3">
             <Col xs={10}>
             <strong>Tax Benefits for Investment under National Pension Scheme launched by Government</strong> 
             </Col>
             <Col xs={2} className="d-flex justify-content-end">
             <Image className="threedots" src={threedots}></Image>
             </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <p className="truncate-text">Lorem ipsum dolor sit amet. Hic voluptatem excepturi et laborum similique qui molestiae quia aut amet vitae est mollitia excepturi est deserunt nihil ut laborum voluptates. Aut consequatur autem e</p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={6}>
                   <Row className="m-0 p-0 d-flex align-items-center">
                    <Col xs="auto" className="m-0 p-0">
                        <Image rounded src={sarah}></Image>
                    </Col>
                    <Col xs="auto">
                    <Stack gap={0} className="m-0 p-0">
                        <strong className="">Sarah West</strong><p>1.3k views</p>
                    </Stack>
                    </Col>
                   </Row>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                <Button style={{height:'40px'}} className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg> Share
                </Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>

        <Card>
            <Card.Img variant="top" src={pic3} />
             <Card.Body>
            <Row className="m-3 d-flex align-items-center">
            <Col  xs="auto" className="p-0"><Image className="pen" src={meet}></Image></Col> <Col xs="auto" className="p-0"><h6 className="mb-0 ml-2">Meetup</h6></Col>
            </Row>
            <Row className="m-3">
             <Col xs={10}>
             <strong>Finance & Investment Elite Social Mixer @Lujiazui</strong> 
             </Col>
             <Col xs={2} className="d-flex justify-content-end">
             <Image className="threedots" src={threedots}></Image>
             </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <p className="truncate-text">Lorem ipsum dolor sit amet. Hic voluptatem excepturi et laborum similique qui molestiae quia aut amet vitae est mollitia excepturi est deserunt nihil ut laborum voluptates. Aut consequatur autem e</p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={6}>
                   <Row className="m-0 p-0 d-flex align-items-center">
                    <Col xs="auto" className="m-0 p-0">
                        <Image rounded src={ronal}></Image>
                    </Col>
                    <Col xs="auto">
                    <Stack gap={0} className="m-0 p-0">
                        <strong className="">Roanl Jones</strong><p>1.3k views</p>
                    </Stack>
                    </Col>
                   </Row>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                <Button style={{height:'40px'}} className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg> Share
                </Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        
        <Card>
             <Card.Body>
            <Row className="m-3 d-flex align-items-center">
            <Col  xs="auto" className="p-0"><Image className="pen" src={job}></Image></Col> <Col xs="auto" className="p-0"><h6 className="mb-0 ml-2">Job</h6></Col>
            </Row>
            <Row className="m-3">
             <Col xs={10}>
             <strong>Software Developer - II</strong> 
             </Col>
             <Col xs={2} className="d-flex justify-content-end">
             <Image className="threedots" src={threedots}></Image>
             </Col>
            </Row>
            <Row className="m-3">
                <Col>
                    <p className="truncate-text">Lorem ipsum dolor sit amet. Hic voluptatem excepturi et laborum similique qui molestiae quia aut amet vitae est mollitia excepturi est deserunt nihil ut laborum voluptates. Aut consequatur autem e</p>
                </Col>
            </Row>
            <Row className="m-3">
                <Col xs={6}>
                   <Row className="m-0 p-0 d-flex align-items-center">
                    <Col xs="auto" className="m-0 p-0">
                        <Image rounded src={joseph}></Image>
                    </Col>
                    <Col xs="auto">
                    <Stack gap={0} className="m-0 p-0">
                        <strong className="">Joseph Gray</strong><p>1.3k views</p>
                    </Stack>
                    </Col>
                   </Row>
                </Col>
                <Col xs={6} className="d-flex justify-content-end">
                <Button style={{height:'40px'}} className="btn btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg> Share
                </Button>
                </Col>
            </Row>
            </Card.Body>
        </Card>
        </Col>
        <Col className="d-none d-md-block" >
        <div className="mb-3">
        <Form className="d-flex justify-content-center position-relative">
              <img
                src={location}
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
                style={{ maxWidth: '800px', paddingLeft: '40px' }}
                placeholder="Enter Pincode"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <br></br>
            <Col className="p-1 d-flex justify-content-center">
                <img src={msg}/>
            </Col>
        </div>
        </Col>
        </Row>
        </Container>
    );
}

export default Feed;