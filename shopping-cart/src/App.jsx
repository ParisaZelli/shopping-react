import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
    <Container>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Shop />} />
      </Routes>
    </Container>
    </CartProvider>
  );
}

export default App
