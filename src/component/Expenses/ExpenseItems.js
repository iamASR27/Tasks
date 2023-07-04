// import React, { useState } from 'react';
import React from 'react';
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import Expensedetails from "./ExpenseDetails";
import './ExpenseItems.css'

const ExpenseItems = (props) => {
  // const [newTitle, setNewTitle] = useState(props.title);
  // const[newAmount, setNewAmount] = useState(props.amount);
  // const clickHandler = () => {
  //   setNewTitle("Updated!");
  //   console.log(newTitle);
  // }
  // const deleteExpense = () => {
  //   const cardElement = document.getElementsByClassName("ex-items");
  //   cardElement[0].remove();
  // }
  // const editAmount = () => {
  //   setNewAmount("100");
  // }
  return (
    <Card className="ex-items">
      <ExpenseDate date={props.date} className="ex-date"/>
      <Expensedetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      {/* <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete</button>
      <button onClick={editAmount}>Edit</button> */}
    </Card>
  );
};

export default ExpenseItems;
