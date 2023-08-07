import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                // console.log(createdUser);
                event.target.reset();
                navigate(from, { replace: true })
                setSuccess('successfully Register')
            })
            .catch(error => {
                setError(error.message);
            })


    }
   

    const handleChange = (e) => {
        const password = e.target.value;
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add least one upper case');
            return;
        } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add the least two number')
            return;
        } else if (password.length < 6) {
            setError('Please add least 6 characters in your password')
            return;
        }
        else {
            setError('')
        }
        console.log(e.target.name);
        console.log(e.target.value);
    }

    return (
        <Container className='mx-auto w-50'>
            <h3 className='display-6 text-center'>Create Account</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" required />
                </Form.Group>
              
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
                <Button variant="primary" type="submit">
                    Create Account
                </Button><br />

                <Form.Text className="text-secondary">
                    I have an Account?
                    <Link to="/LogIn"> logIn</Link>
                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;