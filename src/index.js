import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';
import rootReducer from './reducers';
import App from './app/App'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

import './utils/style.css'

import 'react-table/react-table.css'

import "react-datepicker/dist/react-datepicker.css";

// Views
// import Login from './views/Pages/Login/'
// import Register from './views/Pages/Register/'
// import Page404 from './views/Pages/Page404/'
// import Page500 from './views/Pages/Page500/'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        {/* <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/> */}
        <Route path="/" name="Home" component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));

