import { cartItemActions } from "./cartItemSlice";
import { cartActions } from "./cartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const respone = await fetch(
        "https://foods-24hdev-default-rtdb.firebaseio.com/cart.json"
      );
      if (!respone.ok) {
        throw new Error("Could not fetch cart data!");
      }
      return await respone.json();
    };
    try {
      const data = await fetchData();
      console.log(data);
      dispatch(cartItemActions.fetchCartItem(data));
    } catch (error) {
      dispatch(
        cartActions.showNotify({
          status: "error",
          title: "Error!",
          message: "Something went wrong!",
        })
      );
    }
  };
};

export const sendCartData = (cartItem) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotify({
        status: "pending",
        title: "sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const respone = await fetch(
        "https://foods-24hdev-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItem),
        }
      );
      if (!respone.ok) {
        throw new Error("Sending cart data failed!");
      }
    };
    try {
      await sendRequest();
      dispatch(
        cartActions.showNotify({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotify({
          status: "error",
          title: "Error!",
          message: "Something went wrong!",
        })
      );
    }
  };
};
