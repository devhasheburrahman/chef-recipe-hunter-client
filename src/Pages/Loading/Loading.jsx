import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
    return (
        <div className='text-center'>
            <Spinner animation="grow" variant="success" />
            {/* <Spinner animation="border" variant="primary" /> */}
            <p>Loading...</p>
        </div>
    );
};

export default Loading;