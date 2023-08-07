import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import ReactToPdf from 'react-to-pdf'

const Blogs = () => {
    const ref = React.createRef();
    return (
        <div className='overflow-hidden'>
            <p className='display-3 text-center text-danger'>Questions<span className='text-success'> And Answer</span></p>
            <div ref={ref}>
                <Row xs={1} md={2}>

                    <Card>

                        <Card.Body>
                            <Card.Title>Tell us the differences between uncontrolled and controlled components</Card.Title>
                            <Card.Text>
                                In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>How to validate React props using PropTypes</Card.Title>
                            <Card.Text>
                                React is a JavaScript library that is widely used for building user interfaces. PropTypes is a feature in React that allows developers to validate the props that are passed to a component. Props are essentially parameters that are passed to a component, and PropTypes helps to ensure that these parameters are of the expected type and shape. To validate React props using PropTypes, developers can define the expected type and shape of the props in the component's propTypes property. This is typically done by importing the PropTypes library from the React package and defining the expected type and shape for each prop.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>Difference between nodejs and express js. ?</Card.Title>
                            <Card.Text>
                                Node.js is a runtime environment that allows developers to run JavaScript code on the server side, while Express is a web framework built on top of Node.js that provides a set of tools and features for building web applications and APIs. In short, Node.js provides the foundation for building server-side applications in JavaScript, while Express provides a higher level of abstraction with a set of features and tools for building web applications and APIs.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>

                        <Card.Body>
                            <Card.Title>What is a custom hook, and why will you create a custom hook ?</Card.Title>
                            <Card.Text>
                                A custom hook is a reusable function in React that allows developers to abstract away common logic and stateful behavior in components. Custom hooks are created to share stateful logic between different components, without having to duplicate the same code in each component. Custom hooks are typically used to handle common tasks such as data fetching, form handling, and state management, among others. By creating a custom hook, developers can encapsulate complex logic and reuse it across different components, making code more modular, reusable, and maintainable.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Row>
            </div>

            <div className='text-center mt-5'>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                    {({ toPdf }) => (
                        <Button onClick={toPdf}> Download PDF <FaDownload></FaDownload> </Button>
                    )}
                </ReactToPdf>

            </div>

        </div>


    );

};

export default Blogs;