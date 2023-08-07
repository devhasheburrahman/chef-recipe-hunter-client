import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="text-center" >
            <h1>404</h1>
            <p>pages not Found</p>
            <Link to="/">

                <Button>
                    Go to the Home Page
                </Button>
            </Link>
        </div>
    );
};

export default Error;