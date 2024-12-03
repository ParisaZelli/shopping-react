import { Row, Col } from "react-bootstrap";
import ProductTtem from "../components/ProductItem";
import { productList } from "../data/items";

function Shop() {
  return (
    <Row xs={1} md={4} className="g-4">
      {productList.map((item) =>(
        <Col align='center' key={item.id}>
            <ProductTtem product={item} />
        </Col>
      ))}
    </Row>
  )
}

export default Shop;
