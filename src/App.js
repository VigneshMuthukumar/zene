import React , {Component} from "react";
import {Router , Route  } from "react-router-dom";
import { createBrowserHistory } from 'history';
import PrivateRoute  from './helpers/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

export const history = createBrowserHistory();
export default class App extends Component {

    render(){
      return (
        <div>
          <Router history={history}>
              <div>
                <Route path="/login" component={LoginPage} />
                <PrivateRoute exact path="/" component={HomePage} />
              </div>
          </Router>
        </div>
      );
    }
}
