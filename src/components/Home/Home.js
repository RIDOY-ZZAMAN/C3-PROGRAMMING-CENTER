import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row, Button } from 'react-bootstrap';
import Services from '../Services/Services';
import img from '../../images/home-logo.png';
import { useHistory } from 'react-router';


const Home = () => {
    const [courses, setCourse] = useState([]);
    useEffect(() => {
        fetch('./fourservices.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))

    }, []);
    const history = useHistory();
    const handleClick = () => {
        history.push('/courses')

    }
    return (

        <div>
            <div className="d-flex align-items-center" style={{ backgroundColor: "indigo" }}>
                <div>
                    <h1 className="ms-5 text-white">C3 <br />PROGRAMMING CENTER</h1>
                    <p className="ms-5 text-white" > Enjoy a personalized, fun, and interactive learning
                        process while becoming a Programming Expert.</p>
                    <Button className="my-4 ms-5" onClick={handleClick}>View All Courses</Button>
                </div>
                <div className="mx-auto">
                    <img src={img} alt="" />
                </div>
            </div>

            <Row className="ms-5 my-3">

                <Col xs={12} md={8}>
                    <h2>Our Programming Courses</h2>
                    <Row xs={1} md={2} className="g-4">

                        {
                            courses.map(course => <Services course={course} key={course.Cid}></Services>)
                        }
                    </Row>
                </Col>
                <Col xs={6} md={4}>
                    <InputGroup className="mb-3 p-3" >
                        <FormControl
                            placeholder="Search for Courses"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                    <div>
                        <h4 className="border border-3 border-dark"> <i className="far fa-list-alt"></i> Catagories</h4>
                        <div className="d-flex ">
                            <Form.Check aria-label="option 1" /> <h5 className="ms-2"> Front End</h5>
                        </div>
                        <div className="d-flex">
                            <Form.Check aria-label="option 1" /> <h5 className="ms-2"> BackEnd</h5>
                        </div>
                        <div className="d-flex">
                            <Form.Check aria-label="option 1" /> <h5 className="ms-2"> Machine Learning</h5>
                        </div>
                        <div className="d-flex">
                            <Form.Check aria-label="option 1" /> <h5 className="ms-2"> ios APP Development</h5>
                        </div>
                        <div className="d-flex">
                            <Form.Check aria-label="option 1" /> <h5 className="ms-2"> Android APP Development</h5>
                        </div>

                    </div>
                </Col>
            </Row>
            <Button className="my-4" onClick={handleClick} style={{ marginRight: "370px" }}>See More</Button>
        </div>


    );
};

export default Home;