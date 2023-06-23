import "./ExpenseDetails.css";

function ExpenseDetails(props) {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="expense-details">
      <div className="expense-title">{title}</div>

      <div className="expense-location">{location}</div>
      <div className="expense-amount">Rs. {amount}</div>
    </div>
  );
}

export default ExpenseDetails;
