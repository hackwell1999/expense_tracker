import React, { useState } from "react";
import "./expense.css";
import ExpensesFilter from "./ExpensesFliter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
// coditional aayit content dispaly cheyyan use cheyyunna method aan ith if there is expense it display it otherwise it display <p>no expense is here</p>, there is an alternative method which is commented in return section 
  

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {/* alternative way of displaing conditional contenet */}
      {/* {filteredExpenses.length === 0 && <p>NO expenses here</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      <ExpensesList items={filteredExpenses}/>
      
    </div>
  );
}

export default Expense;
