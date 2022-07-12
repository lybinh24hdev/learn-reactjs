import { useReducer } from "react";
import CartContext from "./CartContext";

const initState = {
  items: [],
  totalAmount: 0,
};

const ADD = "add";
const REMOVE = "remove";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case REMOVE:
      break;
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(reducer, initState);
  const { items, totalAmount } = cartState;

  const addItemHandler = (item) => {
    dispatch({ type: ADD, payload: item });
  };
  const removeItemHandler = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };

  const value = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};

export default CartProvider;
