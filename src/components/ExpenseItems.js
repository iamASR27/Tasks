import './ExpenseItems.css';

function ExpenseItem() {
  const expenseDate = new Date(2023, 5, 21);
  const expenseTitle = "Movies";
  const LocationOfExpenditure = "Bhopal";
  const expenseAmount = 200;


  return (
    <div className="expense-item">
      {/* <h2>Expense List</h2> */}
      <div className="date">{expenseDate.toLocaleString()}</div>
      <div className="expense-title">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-location">
        <h2>{LocationOfExpenditure}</h2>
      </div>
      <div className="expense-amount">Rs.{expenseAmount}</div>
      {/* <ul className="item-list">
        <li>Food Rs.10</li>
        <li>Petrol Rs.100</li>
        <li>Movies Rs.200</li>
      </ul> */}
    </div>
  );
}

export default ExpenseItem;
