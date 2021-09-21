import React , { useState } from 'react'
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
const Expenses=(props)=>{
  const [filteredYear,setFilterYear]=useState('2021')

  const filerChangeHandler=selectYear=>{
    setFilterYear(selectYear)
  }
  const filteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  
    return(
      <div>
        <Card className="expenses">
        <ExpensesFilter 
        selected={filteredYear} 
        onChangeFilter={filerChangeHandler}>
        </ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}>
        </ExpensesList>
        
      </Card>
    </div>
    )
}
export default Expenses