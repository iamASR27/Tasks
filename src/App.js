import ExItems from "./component/Expenses/Items";
import Card from "./component/UI/Card";

const App = () => {
  const expenses = [
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
      amount: 79900.49,
      date: new Date(2021, 2, 12),
      location: "Pune",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2940.67,
      date: new Date(2021, 2, 28),
      location: "Bhopal",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
      location: "Mumbai",
    },
  ];

  return (
    <Card>
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
    </Card>
  );
};

export default App;
