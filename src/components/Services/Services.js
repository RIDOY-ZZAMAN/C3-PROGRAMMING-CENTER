import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';


const FourServices = (props) => {
    const { img, name, Cid, Duration, Instructor, Price } = props.course;

    return (
        <div>
            <Col>
                <Card style={{ height: "430px" }}>
                    <Card.Img variant="top" src={img} height="200px" />
                    <Card.Body>
                        <Card.Title>Course Name: {name}</Card.Title>
                        <h5>Course Id: {Cid}</h5>
                        <h5>Course Duration: {Duration}</h5>
                        <h5>Instructor: {Instructor}</h5>
                        <h5>Price: ${Price}</h5>
                        <Button variant="success">Buy Now</Button>
                    </Card.Body>

                </Card>

            </Col>

        </div>
    );
};

export default FourServices;