import React, { useState } from 'react';
import './Categories.css';
import { Col, Container, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import UseFood from '../../../Hooks/UseFood';
import Category from '../Category/Category';

const Categories = () => {
    const [products] = UseFood();
    const [key, setKey] = useState("Lunch");
    const Breakfasts = products.filter(
        (product) => product.category === "Breakfast",
    );
    const Lunchs = products.filter((product) => product.category === "Lunch");
    const Dinners = products.filter((product) => product.category === "Dinner");
    return (

        <Container>
            <Row className="pt-5">
                <Col className="col-12">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 d-flex justify-content-center"
                    >
                        <Tab eventKey="Breakfast" title="Breakfast" className="bg-blue">
                            <Row className="py-5 g-4">
                                {Breakfasts.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : Breakfasts.map((product) => (
                                    <Category product={product} key={product.id} />))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Lunch" title="Lunch">
                            <Row className="py-5 g-4">
                                {Lunchs.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : Lunchs.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Dinner" title="Dinner">
                            <Row className="py-5 g-4">
                                {Dinners.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : Dinners.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container >
    );

};

export default Categories;