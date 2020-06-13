// install -> import -> use
// import validator from 'validator'

// console.log(validator.isEmail('foo'))
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import "./playground/promises";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('uid', user.uid);
      store.dispatch(login(user.uid))
      store.dispatch(startSetExpenses()).then(() => {
        renderApp();
        if(history.location.pathname === '/'){
          history.push('/dashboard');
        }
      });
    } else {
      renderApp();
      store.dispatch(logout());
      history.push('/');
    }
});
  