import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="my-5">
            <div className="border mb-5">
                <h2>Get In Touch</h2>
                <p>Have a question or just want to say hi? We'd love to hear from you.

                </p>
            </div>
            <Row>
                <Col>
                    <Form className="mx-auto" style={{ width: "600px" }}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                        </Row>
                        <Form.Control type="text" placeholder="Subject" />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
                        </Form.Group>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I agree to theTerms & Conditions" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Send Your Message
                        </Button>
                    </Form>
                </Col>
                <Col className="border ms-3 py-2">
                    <h5>New York Office</h5>
                    <p>Maypole Crescent 70-80 Upper St Norwich NR2 1LT</p>
                    <h5>Email Us Directly</h5>
                    <p>support@C3.com</p>
                    <p>info@C3.com</p>
                    <h5>Phone Number</h5>
                    <p>+44232323</p>
                    <p>+43233232</p>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter mx-3"></i>
                    <i class="fab fa-dribbble"></i>
                    <i class="fab fa-linkedin-in mx-3"></i>
                </Col>

            </Row>
        </Container>
    );
};

export default Contact;