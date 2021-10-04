import React from 'react';
import img from '../../images/error.png'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')

    }
    return (
        <div className="my-4">
            <img src={img} alt="" />
            <h1>Page Not Found</h1>
            <Button className="my-4" onClick={handleClick}>Back To Home</Button>
        </div>
    );
};

export default NotFound;