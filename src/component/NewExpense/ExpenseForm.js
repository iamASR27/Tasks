import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
    }
  return (
    <form>
      <div className="expense-form">
        <div className="expense-form-input">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="expense-form-input"> 
          <label>Expense Amount</label>
          <input type="number" min="1" step="1" />
        </div>
        <div className="expense-form-input">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2024-12-31" />
        </div>
      </div>
      <div className="expense-submit">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
