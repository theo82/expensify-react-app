import React from 'react'
import ExpenseList  from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from "./ExpensesSummary";

export const ExpenseDahsboardPage = () => (
    <div>
       <h1>Header</h1>
       <ExpensesSummary />
       <ExpenseListFilters />
       <ExpenseList />
    </div>
);

export default ExpenseDahsboardPage
