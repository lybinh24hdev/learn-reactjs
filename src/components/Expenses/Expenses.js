import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses(data) {

  return (
    <Card className="expenses">

        {data.data.map((item) => (
          <Card className="expense-item" key={item.id}>
            <ExpenseDate date={item.date} />
            <ExpenseItem amount={item.amount} title={item.title} />
          </Card>
        ))}

    </Card>
  );
}

export default Expenses;
