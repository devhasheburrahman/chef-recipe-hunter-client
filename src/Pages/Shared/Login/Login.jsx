import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';




const Login = () => {
    const [error, setError] = useState("");
    const { signIn, handleGoogleSignIn, handleGitHubSignIn, setUser
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";
    console.log(from);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if ((email, password)) {
            signIn(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    navigate(from, { replace: true })
                    event.target.reset();
                })
                .catch((error) => setError(error.message));
        }
    };
    const handleGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                console.log(result);
                const loggedUser = result.user
                
                setUser(loggedUser)
                navigate(from, { replace: true });
            })
            .catch((error) => setError(error.message));
    }
    const handleGitHub = () => {
        handleGitHubSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from);
            })
            .catch((error) => setError(error.message));
    }
    return (
        <Container className='mx-auto w-50'>
            <h3 className='text-center display-3'>Please Login</h3>
            <div className='d-flex gap-2 justify-content-center'>
                <Button onClick={handleGoogle} variant="outline-primary"><FaGoogle />  Sign in with Google</Button>
                <Button onClick={handleGitHub} variant="outline-primary"> <FaGithub /><span className='m-2'> Sign in with GitHub</span></Button>
            </div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button
                    variant="primary" type="submit">
                    LogIn
                </Button><br />

                <Form.Text className="text-secondary">
                    Don't Have an Account ?
                    <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;