import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  let expensescontent = <p>no expenses found.</p>;
  if (!props.items.length) {
    return <>{expensescontent}</>;
  } else
    return (
      <>
        <ul className="expenses-list">
          {props.items.map((item, index) => (
            <ExpenseItem key={index} item={item} />
          ))}
        </ul>
      </>
    );
};

export default ExpenseList;
