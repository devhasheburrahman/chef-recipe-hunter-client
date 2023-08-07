import React, { useContext } from 'react';
import { Button, Col, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const NavigationBer = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
        localStorage.clear();
    }


    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"><span className='display-6'>Taste of Nations</span></Nav.Link>
                        </Nav>



                        <NavLink
                            className={(navData) => (navData.isActive ? 'text-danger ' : '')}
                            to="/"
                        >
                            <span className='mx-4 '>Home</span>
                        </NavLink>


                        <NavLink
                            className={(navData) => (navData.isActive ? 'text-danger' : '')}
                            to="/blogs"
                        >
                            <span className='mx-4 text-decoration-none'>Blogs</span>
                        </NavLink>

                        <NavLink
                            className={(navData) => (navData.isActive ? 'text-danger' : '')}
                            to="/about"
                        >
                            <span className='mx-3'> About</span>
                        </NavLink>

                        <Nav className='gap-2'>
                            {user && <Col >
                                {
                                    user.photoURL ?
                                        <Image height={"40px"} src={user.photoURL} title={user.displayName} roundedCircle /> :
                                        <Image height={"40px"} src={'/public/images/images.png'} title={user.displayName} roundedCircle />

                                }
                            </Col>
                            }


                            {user ?
                                <Button onClick={handleLogOut} variant="outline-primary">LogOut </Button> :
                                <Link to="/login"> <Button variant="success">Login</Button></Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBer;