import Card from "../UI/Card";
import ExDate from "./Date";
import Exdetails from "./Details";
import './Items.css'

const ExItems = (props) => {
  return (
    <Card className="ex-items">
      <ExDate date={props.date} className="ex-date"/>
      <Exdetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
};

export default ExItems;
