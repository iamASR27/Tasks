import Card from "../UI/Card";
import ExDate from "./Date";
import Exdetails from "./Details";
import './Items.css'

const ExItems = (props) => {
  const clickHandler = () => {
    console.log("Clicked!");
  }
  const deleteExpense = () => {
    const cardElement = document.getElementsByClassName("ex-items");
    cardElement[0].remove();
  }
  return (
    <Card className="ex-items">
      <ExDate date={props.date} className="ex-date"/>
      <Exdetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteExpense}>Delete</button>
    </Card>
  );
};

export default ExItems;
