// install -> import -> use
// import validator from 'validator'

// console.log(validator.isEmail('foo'))
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 34, createdAt: 600 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 500, createdAt: 780 }));
store.dispatch(addExpense({ description: 'New iMac', amount: 2500, createdAt: 580 }));
store.dispatch(addExpense({ description: 'Drone', amount: 850, createdAt: 890 }));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
