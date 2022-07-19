import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cartItemActions";
// import { fetchCartData } from "./store/cartItemActions"

let isInitial = true;

function App() {
  const isShow = useSelector((state) => state.cart.isShow);
  const notify = useSelector((state) => state.cart.notify);
  const cartItem = useSelector((state) => state.cartItem.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCartData(cartItem))

    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartItem));
  }, [cartItem, dispatch]);

  return (
    <>
      {notify && (
        <Notification
          status={notify.status}
          title={notify.title}
          message={notify.message}
        />
      )}
      <Layout>
        {isShow && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
