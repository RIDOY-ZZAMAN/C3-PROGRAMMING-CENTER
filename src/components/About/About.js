import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/C3.png'


const About = () => {
    return (
        <div>

            <Container className="my-5">
                <Row>
                    <Col>
                        <div>
                            <img src={img} alt="" width="95%" height="300px" />
                        </div>

                    </Col>
                    <Col className="border rounded">
                        <h2 className="my-3 border-bottom border-dark pb-2 border-1">Achive your goal with C3 Programming Center</h2>
                        <p>C3 is one of the best programing learning center in this area.<br />
                            We Proive quality full services to our programming learners.
                        </p>
                        <p><i className="fas fa-check"></i> Upskill your organization.
                        </p>
                        <p><i className="fas fa-check"></i> Access more then 100K online courses
                        </p>
                        <p><i className="fas fa-check"></i> Learn the latest skills
                        </p>
                    </Col>
                </Row>
                <div className="my-5">
                    <h4>We Are Proud</h4>
                    <p>You don't have to struggle alone, you've got our assistance and help.
                    </p>
                </div>
                <div className="d-flex" style={{ marginLeft: "280px" }}>
                    <div>
                        <i className="fas fa-users"></i>
                        <h5>345,421</h5>
                        <p>Students Enrolled
                        </p>
                    </div>
                    <div className="mx-4">
                        <i className="fas fa-book"></i>
                        <h5>2,485</h5>
                        <p>Total Courses
                        </p>
                    </div>
                    <div className="mx-4">
                        <i className="fas fa-user-graduate"></i>
                        <h5>24,085</h5>
                        <p>Online Learners
                        </p>
                    </div>
                    <div>
                        <i className="fas fa-globe-americas"></i>
                        <h5>202k</h5>
                        <p>Foreign Followers
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;