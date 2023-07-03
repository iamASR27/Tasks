import React from 'react';
import ExpenseItems from "./ExpenseItems";
import Card from '../UI/Card';


const Expenses = (props) => {
  return (
    <Card className="expenses">
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
    </Card>
  );
}

export default Expenses;