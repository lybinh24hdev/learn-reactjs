import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShow, setIsCartShow] = useState(false);
  const showCarthandler = () => {
    setIsCartShow(true);
  };
  const hideCarthandler = () => {
    setIsCartShow(false);
  };
  return (
    <CartProvider>
      {isCartShow && <Cart onHideCart={hideCarthandler} />}
      <Header onShowCart={showCarthandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
