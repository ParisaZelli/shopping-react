import { useState, useContext } from "react";
import { Navbar as NavbarBs, Button, Modal } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { BsCart } from "react-icons/bs";
import CartProduct from "./CartProduct";
function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const cart = useContext(CartContext)
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  const handleShow = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <NavbarBs className="border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handleShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            ({productsCount})<BsCart className="mx-2"></BsCart>
            سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handleClose} contentClassName="card-bg" dir='rtl'>
        <Modal.Header>
            <Modal.Body>
              {productsCount > 0 ? (
                <>
                <h3 className="mb-4">سبد خرید</h3>
                {cart.items.map((item)=>(
                  <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                ))}

                <h3>مجموع قیمت:{cart.getTotalAmount()}</h3>
                </>
              ) : (
                <h3>سبد خرید خالی است</h3>
              )}

              <Button variant="btn btn-outline-secondary" className="mt-4 mx-3 text-white" onClick={handleClose}>بستن</Button>
            </Modal.Body>
        </Modal.Header>
        
      </Modal>
    </>
  );
}

export default Navbar;
