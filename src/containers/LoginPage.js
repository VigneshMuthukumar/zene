import React from "react";
import { connect } from "react-redux";
import Login from './../components/Login'
class LoginPage extends React.Component {
    componentWillMount(){
        if(localStorage.getItem('access_token')) 
             this.props.history.push('/') 
    }
    render(){
        return(
           <Login {...this.props} />
        )
    }
}

export default connect()(LoginPage);