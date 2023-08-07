import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { FaRegStar, FaStar, FaChessRook, FaHeart, FaHamburger } from 'react-icons/fa';
import Feedback from '../FeedBack/Feedback';
import BestRecipes from '../Best/BestRecipes';


const ChiefCard = ({ users }) => {
    // console.log(users);


    return (
        <Container>
            <section>
                <Row >
                    {users.map((user) => (
                        <Col sm={1} md={4} key={user.id}>
                            <Card style={{ marginTop: "30px", hight: '100px' }}>
                                <Card.Img variant="top" style={{ hight: "20px" }} src={user.picture} />
                                <Card.Body>
                                    <Card.Title> {user.name}</Card.Title>
                                    <Card.Text className='text-secondary'>
                                        {user.chef_description.slice(0, 150)}
                                    </Card.Text>
                                    <div>
                                        <p className='text-success' style={{ fontSize: ' 20px' }}><FaHamburger />    {user.recipe}</p>
                                        <div className='d-flex gap-3 align-content-center'>

                                            <p className='danger' style={{ fontSize: '20px' }}><FaChessRook className='text-success ' /> : {user.experience} </p>
                                            <p><FaHeart className='text-danger ' style={{ fontSize: '20px' }} />   : {user.likes}</p>

                                        </div>
                                        <div className='d-flex gap-3'>
                                            <p style={{ fontSize: '20px' }}>Rating : {user.rating}</p>
                                            <Rating style={{ fontSize: '20px' }}
                                                placeholderRating={user.rating}
                                                readonly
                                                emptySymbol={<FaRegStar></FaRegStar>}
                                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                                fullSymbol={<FaStar></FaStar>} />

                                        </div>

                                    </div>

                                    <Link to={`/ChiefDetails/${user.id}`} user={user}> <Button variant="primary">View  Recipes</Button></Link>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div>

                    <BestRecipes></BestRecipes>
                </div>
                <div className='overflow-hidden'>
                    <h1 className='mt-5 mb-5 fw-bold text-center'>Our client FeedBack </h1>
                    <Feedback></Feedback>
                </div>
            </section>
        </Container>

    );
};

export default ChiefCard;