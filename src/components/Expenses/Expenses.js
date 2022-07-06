import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("all");

  const changeYearHandler = (seletedYear) => {
    setYear(seletedYear);
  };

  let filteredExpenses = [];
  if (year === "all") {
    filteredExpenses = props.data;
  } else {
    filteredExpenses = props.data.filter((item) => {
      return item.date.getFullYear().toString() === year;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter year={year} onChangeYear={changeYearHandler} />
      <ExpensesList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
