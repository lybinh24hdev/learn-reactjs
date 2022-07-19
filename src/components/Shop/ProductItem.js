import { useDispatch } from "react-redux";
import { cartItemActions } from "../../store/cartItemSlice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = (item) => {
    dispatch(
      cartItemActions.addItemToCart(item)
    );
  };

  return (
    props.items.map(item => (
    <li className={classes.item} key={item.id}>
      <Card>
        <header>
          <h3>{item.name}</h3>
          <div className={classes.price}>${item.price.toFixed(2)}</div>
        </header>
        <p>{item.description}</p>
        <div className={classes.actions}>
          <button onClick={() => addItemToCartHandler(item)}>Add to Cart</button>
        </div>
      </Card>
    </li>
    ))
  )
};

export default ProductItem;
