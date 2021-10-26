
import { Card, Col, Button } from "react-bootstrap";
import './Category.css';

const Category = ({ product }) => {
    const { name, img, price, discription } = product;

    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <Card className="porduct_card h-100">
                <Card.Img width="100%" className="product_img img-fluid mx-auto p-3" src={img} />
                <Card.Body>
                    <div className="text-center mb-5">
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {discription}
                        </Card.Text>
                        <Card.Subtitle>${price}</Card.Subtitle>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button variant="danger">
                            See Details
                        </Button>
                        <Button variant="danger">
                            Add To Cart
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Category;
