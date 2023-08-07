import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-center mb-3'>OUR LOCATION</h1>
            <h3 className='text-center '> Baseball,USA </h3>
            <div className='d-flex'>
                <div className='w-50 gap-2'>
                    <img className='img-fluid' src="https://i.ibb.co/k2rBVmY/342544073-449714604039560-3861969621335099144-n.png" alt="" />
                </div>
                <div className='w-50 px-5'>
                    <h3>Taste of Nations Restaurant Location Details</h3>
                    <p>welcome to our Taste of Nation Food Restaurant !! </p>
                    <p><span>Address :</span>No. 99 Jianguo Road, Chaoyang District, Beijing, USA </p>
                    <p><span className='text-success '> Phone Number :</span> 01777441366</p>
                    <p><span>Business Hours:</span>All Day 10:00 am -9:00 pm <small>friday Spathal Discount</small></p>
                    <p><span>Our Location :</span> Our store is located on Jianguo Road, just a 5-minute walk from the nearest subway station, which is very convenient. We offer a variety of delicious pizzas and other dishes for you to enjoy. If you have any questions or concerns, please feel free to contact us at the phone number listed above. Thank you for choosing our restaurant, and we look forward to serving you! </p>

                </div>
            </div>
        </div>
    );
};

export default About;