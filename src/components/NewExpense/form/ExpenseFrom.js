import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({});
  const valueChangeHandler = (inputProperty, value) => {
    if (inputProperty === "title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (inputProperty === "amount") {
      setUserInput({
        ...userInput,
        enteredAmount: value,
      });
    } else {
      setUserInput({
        ...userInput,
        enteredDate: value,
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={(e) => valueChangeHandler("title", e.target.value)}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userInput.enteredAmount}
              onChange={(e) => valueChangeHandler("amount", e.target.value)}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userInput.enteredDate}
              onChange={(e) => valueChangeHandler("date", e.target.value)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">add Expense</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
