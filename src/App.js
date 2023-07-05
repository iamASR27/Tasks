import React, {useState} from 'react';
// import Card from "./component/UI/Card";
import NewExpense from "./component/NewExpense/NewExpense";
import './App.css';
import Expenses from "./component/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "New Delhi",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Pune",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Bhopal",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Mumbai",
    },
  ]);



  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="expense-body">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}/>
    {/* <Card>
      
      {expenses.map((expense) => {
        return (
          <ExItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        );
      })}
    </Card> */}
    </div>
  );
};

export default App;
