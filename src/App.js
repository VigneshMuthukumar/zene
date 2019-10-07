import React , {Component} from "react";
import {Router , Route  } from "react-router-dom";
import { createBrowserHistory } from 'history';
import PrivateRoute  from './helpers/PrivateRoute';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import {  Segment  } from "semantic-ui-react";
import Header from "./components/Header";
export const history = createBrowserHistory();
export default class App extends Component {

    render(){
      return (
        <Segment
            inverted
            textAlign="center"
            style={{ minHeight: '100vh', padding: "1em 0em" }}
            vertical>
              <Header {...this.props} history={history} />
            <Router history={history}>
                <div>
                  <Route path="/login" component={LoginPage} />
                  <PrivateRoute exact path="/" component={HomePage} />
                </div>
            </Router>
        </Segment>
      );
    }
}
