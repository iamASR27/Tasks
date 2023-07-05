import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
 const [showForm, setShowForm] = useState(false);

const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  //console.log(expenseData);
  props.onAddExpense(expenseData);
  setShowForm(false);
}

const showFormHandler = () => {
  setShowForm(true);
}

const collapseFormHandler = () => {
  setShowForm(false);
}

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={collapseFormHandler}/>}
    </div>
  );
};

export default NewExpense;
