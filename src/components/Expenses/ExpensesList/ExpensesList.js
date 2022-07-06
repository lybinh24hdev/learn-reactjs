import "./ExpensesList.css";
import ExpenseItem from "../ExpensesItem/ExpenseItem";
import ExpenseDate from "../ExpensesDate/ExpenseDate";
import Card from "../../UI/Card";

const ExpensesList = (props) => {
  let expensesContent = (
    <p className="no-exps-found">
      Opps! <br /> No expenses found &#128546;
    </p>
  );
  if (props.item.length > 0) {
    expensesContent = props.item.map((item) => (
      <li className="expenses-list__fallback" key={item.id}>
        <Card className="expense-item">
          <ExpenseDate date={item.date} />
          <ExpenseItem amount={item.amount} title={item.title} />
        </Card>
      </li>
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
