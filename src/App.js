import "./App.css";
import { useState } from "react";
import Card from "./components/card/Card";
import NewExpense from "./components/NewExpense/newExpense";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

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
        {expenses.map((item, index) => (
          <ExpenseItem key={index} data={item} />
        ))}
      </Card>
    </div>
  );
}

export default App;
