import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  } else if (props.expenses.length === 1) {
    return (
      <div className="expenses-single">
        <p>Only single Expense here. Please add more...</p>
        <ExpenseItems 
          key={props.expenses[0].id}
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
          location={props.expenses[0].location}
        />
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })}
      ;
    </ul>
  );
};

export default ExpensesList;
