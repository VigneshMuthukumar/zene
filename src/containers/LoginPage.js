import React from "react";
import { connect } from "react-redux";
import Login from './../components/Login'
class LoginPage extends React.Component {

    render(){
        return(
           <Login {...this.props} />
        )
    }
}

export default connect()(LoginPage);