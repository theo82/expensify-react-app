import React from 'react'
import Header from '../components/Header'
import ExpenseDahsboardPage from '../components/ExpenseDahsboardPage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { LoginPage } from '../components/LoginPage';

const AppRouter = () => (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={LoginPage} exact={true} />
                    <Route path="/dashboard" component={ExpenseDahsboardPage} />
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit/:id" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch> 
            </div>   
        </BrowserRouter>
);


export default AppRouter;