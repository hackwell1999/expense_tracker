import React from 'react'
import "./expensesList.css"
import ExpenseItems from './ExpenseItems'
const  ExpensesList = (props) => {
  // coditional aayit content dispaly cheyyan use cheyyunna method aan ith if there is expense it display it otherwise it display <p>no expense is here</p>, there is an alternative method which is commented in return section 
  if(props.items.length === 0){
    return <h2 className='expenses-list__fallback'>Found no expenses</h2>
  }

  
  return(
    <ul className='expenses-list'>
    {props.items.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  )
}

export default ExpensesList