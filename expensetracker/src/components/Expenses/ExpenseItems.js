import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

function ExpenseItems(props) {
const title = props.title
const amount = props.amount
const date = props.date
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItems;
