import { useDispatch, useSelector } from "react-redux";
import { cartItemActions } from "../../store/cartItemSlice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const items = useSelector((state=> state.cartItem.items))
  const dispatch = useDispatch();

  const addItemToCartHandler = (item) => {
    dispatch(cartItemActions.addItemToCart(item));
  };

  const removeItemToCartHandler = (id) => {
    dispatch(cartItemActions.removeItemFromCart(id));
  };

  return items.map((item) => (
    <li className={classes.item} key={item.id}>
      <header>
        <h3>{item.name}</h3>
        <div className={classes.price}>
          ${item.totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{item.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>addItemToCartHandler(item)}>+</button>
          <button onClick={()=>removeItemToCartHandler(item.id)}>-</button>
        </div>
      </div>
    </li>
  ));
};

export default CartItem;
