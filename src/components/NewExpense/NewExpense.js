import ExpenseForm from './ExpenseForm';
import './NewExpense.css'


const NewExpense = (props) => {

    const dataHandler = data => {
        const expenseData = {...data, id: Math.random().toFixed(5).toString(),};
        props.onSaveData(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitData={dataHandler}/>
        </div>
    )
}

export default NewExpense;