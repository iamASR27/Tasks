import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredlocation, setEnteredLocation] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    //     enteredLocation: ""
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value}
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value}
        // })
    }
    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredLocation: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredLocation: event.target.value}
        // })
    }

    const submitHandler = (event) => {
      event.preventDefault();
      
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: enteredDate,
        location: enteredlocation
      };
      console.log(expenseData);
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="expense-form">
        <div className="expense-form-input">
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="expense-form-input"> 
          <label>Expense Amount</label>
          <input type="number" min="1" step="1" onChange={amountChangeHandler} />
        </div>
        <div className="expense-form-input"> 
          <label>Location</label>
          <input type="text" onChange={locationChangeHandler}/>
        </div>
        <div className="expense-form-input">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2024-12-31" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="expense-submit">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
