import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Services from '../Services/Services';


const Courses = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, [])
    return (

        <Row className="ms-5 my-3">

            <Col xs={12} md={8}>
                <div className="border mb-3">
                    <h4>All The Courses Are Listed Here
                    </h4>
                    <p>You Can Buy Your Desired one.</p>
                    <p><i className="far fa-smile"></i> Happy Learing <i className="far fa-smile"></i></p>

                </div>

                <Row xs={1} md={2} className="g-4">
                    {
                        courses.map(course => <Services course={course} key={course.Cid}></Services>)
                    }
                </Row>
            </Col>
            <Col xs={6} md={4}>
                <h4 className="border border-3 border-dark"> <i className="fas fa-clipboard-list"></i> Related Courses</h4>
                <Card style={{ width: '18rem', margin: "0 auto" }}>
                    <Card.Body className="bg-light">
                        <Card.Title>Web Development</Card.Title>
                        <Card.Text>
                            <h4>Price: $200</h4>
                        </Card.Text>
                        <Button variant="secondary">Details</Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', margin: "0 auto" }}>
                    <Card.Body className="bg-light" >
                        <Card.Title>Data Sturcture</Card.Title>
                        <Card.Text>
                            <h4>Price: $200</h4>
                        </Card.Text>
                        <Button variant="secondary">Details</Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', margin: "0 auto" }}>
                    <Card.Body className="bg-light" >
                        <Card.Title>Design and Analysis of Algorithm</Card.Title>
                        <Card.Text>
                            <h4>Price: $200</h4>
                        </Card.Text>
                        <Button variant="secondary">Details</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row >


    );
};

export default Courses;