import { useRef, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const elmTitle = useRef();

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = { title, amount: +amount, date: new Date(date) };
    props.onSubmitData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    elmTitle.current.focus();
  };

  const resetHandler = (e) => {
    e.preventDefault();
    props.onCancel();
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={title}
            type="text"
            ref={elmTitle}
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
