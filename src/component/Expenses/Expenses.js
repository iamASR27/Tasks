import React, { useState } from "react";
// import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Expenses Found.</p>;
  // if (filteredExpenses.length === 1) {
  //   expensesContent = (
  //     <div>
  //       <p>Only single Expense here. Please add more...</p>
  //       <ExpenseItems
  //         key={filteredExpenses[0].id}
  //         title={filteredExpenses[0].title}
  //         amount={filteredExpenses[0].amount}
  //         date={filteredExpenses[0].date}
  //         location={filteredExpenses[0].location}
  //       />
  //     </div>
  //   );
  // } else if (filteredExpenses.length > 1) {
  //   expensesContent = filteredExpenses.map((expense) => {
  //     return (
  //       <ExpenseItems
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //         location={expense.location}
  //       />
  //     );
  //   });
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList expenses={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          );
        })} */}
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItems
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              location={expense.location}
            />
          );
        })
      )} */}
    </Card>
  );
};

export default Expenses;
