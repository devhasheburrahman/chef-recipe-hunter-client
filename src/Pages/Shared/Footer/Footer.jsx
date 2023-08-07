import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="text-center mt-4 bg-secondary">

            <div className='gap-4 text-decoration-none pt-5 pb-3'>
                <a className='text-decoration-none mx-3' href="/"> <FaFacebook></FaFacebook></a>
                <a className='text-decoration-none mx-3' href="/"> <FaTwitter></FaTwitter></a>
                <a className='text-decoration-none mx-3' href="/"> <FaLinkedin></FaLinkedin></a>
            </div>
            <p className='text-white'>&copy; Alright Resolve Chef Recipe Hunter</p>
        </div>
    );
};

export default Footer;