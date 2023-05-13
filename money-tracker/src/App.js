import { useContext, useState } from 'react';
import s from './App.module.scss';
import { ExpenseContext } from './context/expense-context';

function App() {

  const expenseCtx = useContext(ExpenseContext);
  const { totalExpense, onExpenseChange } = expenseCtx;

  console.log("hello  ",expenseCtx);

  // const [expense, setExpense] = useState(0);

  return (
    <div className={s["App"]}>
      <h3>Money Tracker</h3>
      <div className={s['expense-box']}>
        <p>Total Expenses: </p>
        <p>{`₹${totalExpense}`}</p>
      </div>
    </div>
  );
}

export default App;
