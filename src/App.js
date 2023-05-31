import "./App.css";
import { useState } from "react";
import Card from "./components/card/Card";
import NewExpense from "./components/NewExpense/newExpense";
import ExpensesList from "./components/ExpenseList/ExpenseList";

function App() {
  const expenseArray = [];
  const [expenses, setNewExpenses] = useState(expenseArray);
  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="wrapper">
        <ExpensesList items={expenses} />
      </Card>
    </div>
  );
}

export default App;
