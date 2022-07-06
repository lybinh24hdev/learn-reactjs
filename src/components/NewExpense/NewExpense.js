import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const dataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    props.onSaveData(expenseData);
  };
  const cancelHandler = () => setForm(false);

  const formContent = !form ? (
    <button onClick={() => setForm(true)}>Add New Expense</button>
  ) : (
    <ExpenseForm onCancel={cancelHandler} onSubmitData={dataHandler} />
  );

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
