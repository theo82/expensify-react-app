import React from 'react'
import ExpenseList  from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

export const ExpenseDahsboardPage = () => (
    <div>
       <h1>Header</h1>
       <ExpenseListFilters />
       <ExpenseList />
    </div>
);

export default ExpenseDahsboardPage
