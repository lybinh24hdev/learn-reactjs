import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState, useContext } from "react";
import CartContext from "../../../store/CartContext";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const inputRef = useRef();
  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    if (amount.length === 0 || +amount < 1 || +amount > 5) {
      setAmountIsValid(false);
    } else {
      ctx.addItem({ ...props.meal, amount: +amount });
      setAmountIsValid(true)
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          step: "1",
          max: "5",
          defaultValue: "0",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && (
        <p className={classes.notice}>The amount must be 1 to 5!</p>
      )}
    </form>
  );
};

export default MealItemForm;
