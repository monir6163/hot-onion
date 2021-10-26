import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
    const user = <FontAwesomeIcon icon={faUser} />
    const envelope = <FontAwesomeIcon icon={faEnvelope} />
    const lock = <FontAwesomeIcon icon={faLock} />
    const arrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="container" style={{ marginTop: "8rem" }}>
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto">
                    <h2 className="text-center mb-5 text-secondary">Register Now</h2>
                    <Form>
                        <Form.Group className="mb-3" id="formBasicEmail">
                            <Form.Label htmlFor="inlineFormInputGroup1" visuallyHidden>
                                Full Name
                            </Form.Label>
                            <InputGroup className="mb-2 rounded">
                                <InputGroup.Text>{user}</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup1" placeholder="Full Name" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" id="formBasicEmail">
                            <Form.Label htmlFor="inlineFormInputGroup2" visuallyHidden>
                                Email Address
                            </Form.Label>
                            <InputGroup className="mb-2 rounded">
                                <InputGroup.Text>{envelope}</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup2" placeholder="Email Address" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3" id="formBasicPassword">
                            <Form.Label htmlFor="inlineFormInputGroup3" visuallyHidden>
                                Password
                            </Form.Label>
                            <InputGroup className="mb-2 rounded">
                                <InputGroup.Text>{lock}</InputGroup.Text>
                                <FormControl id="inlineFormInputGroup3" placeholder="Password" />
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" className="w-100 fw-bold" type="submit">
                            {arrow} Register
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;