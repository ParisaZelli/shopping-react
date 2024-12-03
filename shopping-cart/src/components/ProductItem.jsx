import { useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function ProductTtem({ product }) {
  const cart = useContext(CartContext);

  const productquantity = cart.getProductQuantity(product.id);
  return (
    <Card className="mt-5 card-bg h-100 w-full" style={{ maxWidth: "300px", minHeight: "450px" }}>
  <Card.Body style={{ height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <Card.Img
      variant="top"
      src={product.image}
      style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "10px" }}
    />
    <div>
      <Card.Title align="right" className="text-light pt-4">
        {product.title}
      </Card.Title>
      <Card.Text align="right" className="text-light" dir="rtl">
        {product.price} تومان
      </Card.Text>
    </div>
    {productquantity > 0 ? (
      <>
        <Form as={Row} className="mt-2">
          <Form.Label column="true" sm="6" className="text-white">
            تعداد: {productquantity}
          </Form.Label>
          <Col sm="6" className="d-flex justify-content-end">
            <Button
              onClick={() => cart.addItemToCart(product.id)}
              sm="6"
              className="mx-1 text-white"
              variant="btn btn-outline-secondary"
            >
              +
            </Button>
            <Button
              onClick={() => cart.removeItemFromCart(product.id)}
              sm="6"
              className="mx-1 text-white"
              variant="btn btn-outline-secondary"
            >
              -
            </Button>
          </Col>
        </Form>
        <Button onClick={() => cart.deleteFromCart(product.id)} className="my-2" variant="btn btn-light">
          حذف از سبد خرید
        </Button>
      </>
    ) : (
      <Button
        onClick={() => cart.addItemToCart(product.id)}
        variant="btn btn-outline-secondary"
        className="text-white mt-3"
      >
        افزودن به سبد خرید
      </Button>
    )}
  </Card.Body>
</Card>

  );
}

export default ProductTtem;
