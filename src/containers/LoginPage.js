import React from "react";
import { connect } from "react-redux";

class LoginPage extends React.Component {

    render(){
        return(
            <div>
                This is login page
            </div>
        )
    }
}

export default connect()(LoginPage);