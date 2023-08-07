import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../../public/images/bannner-2.jpeg'
import banner1 from '../../../public/images/banner-1.jpeg'
import banner3 from '../../../public/images/banner-3.jpeg'
import { Button } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChiefCard from './ChefCard/ChiefCard';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const users = useLoaderData();
    // console.log(users);
    // 


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="carousel-img">
                        <img style={{ height: '500px' }}
                            className="d-block  w-100 "
                            src={banner3}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>

                        {/* /   <h3>First slide label</h3> */}
                        <p className='display-4 text-primary fw-bold carousel-txt'>
                            "It's not just about the food; it's about creating an unforgettable experience for our guests.
                        </p>
                        <Button variant="success">See More</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <div className='carousel-img'>
                        <img style={{ height: '500px' }}
                            className="d-block  w-100"
                            src={banner1}
                            alt="Second slide"
                        />
                    </div>

                    <Carousel.Caption>

                        <p className='display-4 fw-bold text-primary carousel-txt'>
                            "It's not just about the food; it's about creating an unforgettable experience for our guests.
                        </p>
                        <Button variant="success">See More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='carousel-img'>
                        <img style={{ height: '500px' }}
                            className="d-block w-100"
                            src={banner2}
                            alt="Third slide"
                        />
                    </div>

                    <Carousel.Caption>

                        {
                            <p className='display-4 fw-bold text-primary carousel-txt'>
                                "It's not just about the food; it's about creating an unforgettable experience for our guests.
                            </p>}
                        <Button variant="success">See More</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* our chef items */}
            <section>
                <h1 className='text-center fw-bold display-4 mt-5'>Our Chef</h1>
                <ChiefCard users={users} />
            </section>
        </>
    );
}

export default ControlledCarousel;