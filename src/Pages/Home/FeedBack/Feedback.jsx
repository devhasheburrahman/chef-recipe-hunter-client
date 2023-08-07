import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaRegStar, FaStar } from 'react-icons/fa';

import Rating from 'react-rating';

const Feedback = () => {
    return (


        <div className='mt-7'>
            <CardGroup className='mt-3 px-2 gap-5 rounded-3'>
                <Card >
                    <Card.Img style={{ width: "100px" }} variant="top" src={'/images/client-01.jfif'} roundedCircle />
                    <Card.Body>
                        <Card.Title>Hashebur Rahman</Card.Title>
                        <Card.Text>
                            I must also commend the entire kitchen team for their professionalism and the seamless execution of each course. The service was prompt, and the staff members were knowledgeable, attentive, and accommodating, enhancing the overall dining experience.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Rating
                            placeholderRating={5.00}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{ width: "100px" }} variant="top" src={'/images/client-2.jfif'} />
                    <Card.Body>
                        <Card.Title> Naimur hasan</Card.Title>
                        <Card.Text>
                            Thank you once again for your exceptional culinary skills and for creating such a memorable dining experience. You have undoubtedly earned my highest praise, and I will enthusiastically recommend your restaurant to friends, family, and colleagues.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Rating
                            placeholderRating={5.00}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img style={{ width: "100px" }} variant="top" src={'/images/client-3.jfif'} />
                    <Card.Body>
                        <Card.Title>Raherta</Card.Title>
                        <Card.Text>
                            The dishes prepared by you showcased an extraordinary level of skill, creativity, and attention to detail. Each bite was a burst of flavors that delighted my taste buds and left me craving for more. The presentation of the dishes was nothing short of artistry, elevating the dining experience to a whole new level.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Rating
                            placeholderRating={5.00}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>



    );
};

export default Feedback;