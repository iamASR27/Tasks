import './Details.css';

const Exdetails = (props) => {
  const title = props.title;
  const amount = props.amount;
  const location = props.location;

  return (
    <div className="ex-details">
      <div className="ex-title">{title}</div>

      <div className="ex-location">{location}</div>
      <div className="ex-amount">${amount}</div>
    </div>
  );
};

export default Exdetails;
