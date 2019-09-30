import React from "react";
import { connect } from "react-redux";

class HomePage extends React.Component {

    render(){
        return(
            <div>
                This is Home page
            </div>
        )
    }
}

export default connect()(HomePage);