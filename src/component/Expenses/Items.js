import React, { useState } from 'react';
import Card from "../UI/Card";
import ExDate from "./Date";
import Exdetails from "./Details";
import './Items.css'

const ExItems = (props) => {
  const [newTitle, setNewTitle] = useState(props.title);
  const[newAmount, setNewAmount] = useState(props.amount);
  const clickHandler = () => {
    setNewTitle("Updated!");
    console.log(newTitle);
  }
  const deleteExpense = () => {
    const cardElement = document.getElementsByClassName("ex-items");
    cardElement[0].remove();
  }
  const editAmount = () => {
    setNewAmount("100");
  }
  return (
    <Card className="ex-items">
      <ExDate date={props.date} className="ex-date"/>
      <Exdetails
        title={newTitle}
        amount={newAmount}
        location={props.location}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete</button>
      <button onClick={editAmount}>Edit</button>
    </Card>
  );
};

export default ExItems;
