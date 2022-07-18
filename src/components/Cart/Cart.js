import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmited, setDidSubmited] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setConfirm(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmiting(true);
    try {
      const respone = await fetch(
        "https://foods-24hdev-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );
      if (!respone.ok) {
        throw new Error("Occurd error when submit order!");
      }
      setIsSubmiting(false);
      setDidSubmited(true);
      cartCtx.clearItem();
    } catch (error) {
      console.log(error.message);
    }
  };

  const cancelHandler = () => {
    setConfirm(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const actions = confirm ? (
    <Checkout onCancel={cancelHandler} onConfirm={submitOrderHandler} />
  ) : (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {actions}
    </>
  );
  const submitingContent = <p>Submiting order to the server...</p>;
  const submitedContent = (
    <>
      <p>Succesfully submited order!</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmiting && !didSubmited && modalContent}
      {isSubmiting && !didSubmited && submitingContent}
      {didSubmited && submitedContent}
    </Modal>
  );
};

export default Cart;
