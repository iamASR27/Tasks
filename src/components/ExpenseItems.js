import './ExpenseItems.css';

function ExpenseItem(props) {
 

  return (
    <div className="expense-item">
      
      <div className="date">{props.date.toLocaleDateString()}</div>
      <div className="expense-title">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-location">
        <h2>{props.location}</h2>
      </div>
      <div className="expense-amount">Rs. {props.amount}</div>
      
    </div>
  );
}

export default ExpenseItem;
