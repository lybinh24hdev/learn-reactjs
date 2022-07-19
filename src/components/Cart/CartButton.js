import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const   items = useSelector(state => state.cartItem.items)
  const badge = items.reduce((curNumber, item) => curNumber + item.quantity, 0)

  const dispatch = useDispatch()

  const toggleHandler = () => {
    dispatch(cartActions.toggleCart())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
