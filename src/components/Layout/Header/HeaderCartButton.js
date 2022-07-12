import { useContext } from "react";
import CartContext from "../../../store/CartContext";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const badge = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{props.text}</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default HeaderCartButton;
