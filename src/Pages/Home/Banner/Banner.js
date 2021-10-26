import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container-fluid bg-img">
                    <div className="row">
                        <h2 className="text-muted text-center mt-5">Best food waiting for your belly</h2>
                        <div className="col-md-6 col-12 col-lg-8 mx-auto mt-5">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="danger" id="button-addon2">
                                    Search
                                </Button>
                            </InputGroup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;